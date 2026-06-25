const express = require('express');


const app = express();

// Multiple route Handlers
// rH --> route Handler
// Below all are same. We can wrap in arrays.
// app.use("/route", [rH1, rH2, rH3, rH4, rH5]);
// app.use("/route", [rH1, rH2], rH3, rH4, rH5);
// app.use("/route", rH1, rH2, [rH3, rH4], rH5);

app.use("/user", [(req, res, next) => {
    //This is a route Handler.
    console.log("Response 1");
    // res.send("Response 1");
    next();
},
(req, res, next) => {
    console.log("Response 2");
    // res.send("Response 2");
    next();
}],
    (req, res, next) => {
        //This is a route Handler.
        console.log("Response 3");
        next();
        // res.send("Response 3");
    },
    [(req, res, next) => {
        //This is a route Handler.
        console.log("Response 4");
        next();
        // res.send("Response 4");
    },
    (req, res, next) => {
        //This is a route Handler.
        console.log("Response 5");
        next();
        res.send("Response 5");
        //next(); //without sending response //here gives "cannot get" error
        //because it expects another route handler.
    }]
);

//We can also write/handle multiple route handlers like below.
app.use("/users", (req, res, next) => {
    console.log("Users 1");
    // res.send("Users 1");
    next();
});
app.use("/users", (req, res) => {
    console.log("Users 2");
    res.send("Users 2");
});

app.listen(3000, () => console.log('Server is running on port 3000'));