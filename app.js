const express = require("express");
const app = express();
app.use(express.static('public'));


// Route for homepage
app.get("/", (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html');
});
app.get("/works", (request, response, next) => {
    response.sendFile(__dirname + '/views/works.html');
});

// Route for aboutpage
app.get("/about", (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
});

app.listen(3000, () => { console.log("server listening on port 3000")});