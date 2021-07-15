
require('dotenv').config();
const express = require('express');

const app = express();

const morgan = require('morgan');
const helmet = require('helmet');

// file management
const path = require('path');
const upload = require('express-fileupload');
const logger = require('./config/winston');
const corsOptions = require('./config/whitelistedAddress')

// form http payload utilities
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser')
const cors = require('cors')


const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

require("./config/database")(mongoose);


app.use(morgan('combined', { stream: logger.stream.write }));
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'client', 'visitors', 'build')));

app.use('/api/public/Ecommerce/products',express.static(path.join(__dirname, './public/Ecommerce/Products')));
app.use('/api/public/Ecommerce/Slider',express.static(path.join(__dirname, './public/Ecommerce/Slider')));
app.use('/api/public/Blog',express.static(path.join(__dirname, './public/Blog')));
app.use('/uploads', express.static(__dirname + '/uploads')); //serve uploads statically

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(cookieParser())

require('./routes/routes')(app);

app.use(helmet());
app.use(upload());


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


app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'client','visitors','build', 'index.html'));
});



module.exports = app;
