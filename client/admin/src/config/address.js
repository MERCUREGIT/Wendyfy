


export default {
    server: "https://www.wendyfy.com/api",
    headers: {
        authorization: "Bearer " + window.localStorage.getItem("token")
    }
}
