const express = require('express');

const { adminAuth, userAuth } = require("./middlewares/auth");


const app = express();

// Multiple route Handlers
// rH --> route Handler
// The functions in the middle are called as middlewares
// and the functions which are actually sending back the response
// i.e., res.send() are the request/route/response handler.

//GET /users => middleware chain => request handler


//Handle all auth middleware
// We can also use GET, POST, DELETE, etc.
app.use("/admin", adminAuth);

app.use("/admin/getAllData", (req, res) => {
    // logic to check if the user is authorized

    res.send("All data sent!");
});

app.use("/admin/deleteUser", (req, res) => {
    // logic to check if the user is authorized

    res.send("User deleted!");
});


//-----------------------------------------------------------------

//since we have only one path of /user, we can write as below.
app.use("/user", userAuth, (req, res, next) => {
    //This is a route Handler.
    console.log("Response 1");
    // res.send("Response 1");
    next();
},
(req, res, next) => {
    console.log("Response 2");
    // res.send("Response 2");
    next();
    },
    (req, res) => {
        //This is a route Handler.
        console.log("Response 3");
        res.send("Response 3");
    }
);

//In this case, we don't need auth, so we are skipping userAuth here.
app.use("/user/login", (req, res) => {
    res.send("Logged in!");
});

app.listen(3000, () => console.log('Server is running on port 3000'));