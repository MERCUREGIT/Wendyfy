
require('dotenv').config();
const express = require('express');

const app = express();

const morgan = require('morgan');
const helmet = require('helmet');
const cache = require('./helpers/routeCache');
// file management
const path = require('path');
const upload = require('express-fileupload');
const logger = require('./config/winston');
const corsOptions = require('./config/whitelistedAddress')

// form http payload utilities
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser')
const cors = require('cors')


const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

require("./config/database")(mongoose);

// app.use(cache(300))
app.use(morgan('combined', { stream: logger.stream.write }));
// app.options('*', cors(corsOptions));
app.use(cors());
app.use(express.static(path.join(__dirname, 'client', 'visitors', 'build')));
app.use(express.static(path.join(__dirname, 'client', 'admin', 'dist')));

app.use('/api/public/Ecommerce/Slider',express.static('public/Ecommerce/Slider'));
app.use('/api/public/Blog',express.static('public/Blog'));
app.use('/api/uploads', express.static(__dirname + '/uploads')); //serve uploads statically
app.use('/uploads', express.static(__dirname + '/uploads')); //serve uploads statically

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(cookieParser())
app.use(helmet());
app.use(upload());







require('./routes/routes')(app);

app.get('/admin', (req, res) => {
  console.log("admin called")
  res.sendFile(path.join(__dirname, 'client','admin','dist', 'index.html'));
});

app.get('*', (req, res) => {
  console.log("visitors called")
  res.sendFile(path.join(__dirname, 'client','visitors','build', 'index.html'));
});
app.post('/upload', function (req, res, next) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  // sampleFile Input field
  sampleFile = req.files.sampleFile;
  let uploadTo='/uploads/' +(new Date().getTime())+'-'+ sampleFile.name
  uploadPath = __dirname +uploadTo ;

  sampleFile.mv(uploadPath, function(err) {
    if (err)
      return res.status(500).send(err);

    res.send("//"+req.headers.host+uploadTo);
  });
})



app.use((error, req, res, next)=>{
  res.status(error.status || 500);
  console.log("From general error handler",error.message)
  res.json({
    error:{
      message: error.message
    }
  })
})

module.exports = app;
