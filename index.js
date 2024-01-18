const express = require("express");

const app = express();

const port = 3000;

app.use((req, res, next) => {
    console.log("hooo from middelware");
    next();
});

app.use(express.json());

// hiii

app.get("/", (req, res) => {
    console.log(req.body);

    res.send("hiiii from express app");
});

app.get("/login", (req, res) => {
    res.send("hii from login");
});

app.listen(port, () => {
    console.log(`Express app is listening on port ${port}`);
});

// localhost 127.0.0.1: port no.
