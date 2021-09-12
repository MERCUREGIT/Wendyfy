const app = require("./server")

const port = require("./config/portNumber");
 

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// npx react-codemod update-react-imports