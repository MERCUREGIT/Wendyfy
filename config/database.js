process.env.NODE_ENV = "production";

module.exports = function (mongooseInstance){
    let env = process.env.NODE_ENV || 'development';

    mongooseInstance.set('useNewUrlParser', true);
    mongooseInstance.set('useFindAndModify', false);
    mongooseInstance.set('useCreateIndex', true);
    mongooseInstance.set('useUnifiedTopology', true);

if (env == 'development') {
    mongooseInstance.connect("mongodb://localhost:27017/wendyfy", { useNewUrlParser: true, useUnifiedTopology: true }).then((db) => {
    console.log("DEVELOPMENT MONGO CONNECTED");
    }).catch(error => console.log(error.reason.error));
}
else
{
    mongooseInstance.connect("mongodb://wendyfy:Afm7yQATGeuQCalH@cluster0.mcou4.mongodb.net:27017,cluster0-shard-00-01.mcou4.mongodb.net:27017,cluster0-shard-00-02.mcou4.mongodb.net:27017/wendyfy?ssl=true&replicaSet=atlas-qpb3kw-shard-0&authSource=admin&retryWrites=true&w=majority").then((db) => {
    console.log("PRODUCTION MONGO CONNECTED");
    }).catch(error =>console.log("error", error) );
 }
}

