const express = require('express');


const app = express();

app.use("/hello", (req, res) => {
    res.send("Hello from Namaste Node!!:)");
});

app.use("/test", (req, res) => {
    res.send("Hellooo!!!");
});

app.use("/", (req, res) => {
    res.send("Hello from the Home Page");
});

app.listen(3000, () => console.log('Server is running on port 3000'));