const express = require('express');

const { adminAuth, userAuth } = require("./middlewares/auth");


const app = express();


//Always use try-catch for better error handling.
app.use("/user/login", (req, res) => {

    try {
        throw new Error("I don't know what error");
        res.send("User data sent!");
    } catch (e) {
        res.status(500).send("Some Error!!");
    }
    // throw new Error("I don't know what error");
    // res.send("User data sent!");
});


//Wildcard error handling
app.use("/", (err, req, res, next) => {
    if (err) {
        res.status(500).send("Something went Wrong!!");
    }
})

app.listen(3000, () => console.log('Server is running on port 3000'));