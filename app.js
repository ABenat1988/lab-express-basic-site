const express = require("express");
const app = express();
app.use(express.static('public'));

app.get("/", (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html');
});
app.listen(3000, () => { console.log("server listening on port 3000")});