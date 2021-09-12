let env = process.env.NODE_ENV || 'development';
let server ="";

if (env === 'development') {
    server = "http://localhost:5000/api"
}
else
{
    server= "https://wendyfy.com/api"
 }

 export default {
    server,
    headers: {
        authorization: "Bearer " + window.localStorage.getItem("token")
    }
}