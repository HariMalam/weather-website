const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

// Set the view engine
app.set('view engine', 'hbs'); // Replace 'ejs' with your chosen view engine

// Define the path to the 'views' directory
const viewsPath = path.join(__dirname, '../views');
console.log(viewsPath);
app.set('views', viewsPath);

app.get("/", (req, res) => {
    res.render('index');
});

app.get("/about", (req, res) => {
    res.send("Welcome to the about page");
});

app.get("/weather", (req, res) => {
    res.send("Welcome to the weather page");
});

app.get("*", (req, res) => {
    res.send("404 error page");
});

app.listen(port, () => {
    console.log(`Listening to the port at ${port}`);
});
