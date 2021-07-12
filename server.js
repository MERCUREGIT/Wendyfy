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
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/api/public/Ecommerce/products',express.static(path.join(__dirname, './public/Ecommerce/Products')));
app.use('/api/public/Ecommerce/Slider',express.static(path.join(__dirname, './public/Ecommerce/Slider')));
app.use('/api/public/Blog',express.static(path.join(__dirname, './public/Blog')));
app.use('/uploads', express.static(__dirname + '/uploads')); //serve uploads statically

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(cookieParser())

// security

// /**
//  * @deprecated
//  */

// const multer  = require('multer')
// const uploads = multer({ dest: 'uploads/' })
app.use(helmet());
app.use(upload());
// method override

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

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function(err) {
    if (err)
      return res.status(500).send(err);

    res.send("//"+req.headers.host+uploadTo);
  });
})
app.use(morgan('combined', { stream: logger.stream.write }));


require('./routes/routes')(app);




// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, './client/visitor/build')));
// app.use(express.static(path.resolve(__dirname, './client/admin/build')));
// app.use(express.static(path.resolve(__dirname, './client/admin/build')));


// const fileUpload = require('express-fileupload');
// default options
// app.use(fileUpload());



/*app.post('/upload', function(req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // sampleFile Input field
  sampleFile = req.files.sampleFile;
  uploadPath = __dirname + '/public/uploads/' + sampleFile.name;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function(err) {
    if (err)
      return res.status(500).send(err);

    res.send(uploadPath);
  });
});*/

// app.get("/admin",(req, res)=>{
//     res.sendFile(path.resolve(__dirname, './client/admin/build', 'index.html'));
// });

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/visitors/build', 'index.html'));
});



module.exports = app;
