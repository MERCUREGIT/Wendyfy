const whiteList =['http://localhost:8080','http://localhost:3000/','http://localhost:3000/login-register', 'https://kellyfight.com','https://www.cinetpay.com']
const corsOptions={
    origin: function(origin, callback) {
        if(whiteList.indexOf(origin) !== -1){
            callback(null, true);
        }else{
            callback(new Error('Not allowed by CORS'));
        }
    }
}

module.exports = {
    corsOptions
}
