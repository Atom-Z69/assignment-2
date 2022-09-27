const baganassignment = require("express");

const app = baganassignment();

app.get("", (req, res) => {
    res.send("<h1>👀Hello Bagan👀</h1>")
})


app.get("/bagan", (req, res) => {
    res.sendFile(__dirname + "/1.html")
});

app.get("/tamples", (req, res) => {
    res.sendFile(__dirname + "/2.html")
});

app.get("/airballoons", (req, res) => {
    res.sendFile(__dirname + "/3.html")
});

app.get("/hotels", (req, res) => {
    res.sendFile(__dirname + "/4.html")
});

app.listen(3000, () => {
    console.log("Server Running At : port:3000")
});