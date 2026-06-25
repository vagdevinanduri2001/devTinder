const express = require('express');


const app = express();

//Order of routes matter!!!
//If we put this route first, then it will be executed for all
// the requests and the other routes will not be executed


//Patterns in the routes
// /ab?c --> b is optional
// /a(bc)?d --> bc is optional
// /ab+c --> it works for /abc,/abbc,/abbbc,....
// /ab*c --> it works for /abc,/abvagdevic, /abckejhfgrtgc,...
// grouping works same as 2nd example for all

// /a(bc)*d --> not working
// /abc*d --> working
// /abc+d --> not working
// /ab?d --> not working
app.get("/abc", (req, res) => {
    res.send("abc");
});


// /user?userId=123&name=Vagdevi 
// /user/:userId/:name
app.get("/user/:userId/:name", (req, res) => {
    // console.log(req.query);
    console.log(req.params);
    res.send({ firstName: 'Vagdevi', LastName: 'Nanduri' });
});

app.post("/user", (req, res) => {
    res.send("Saved Data to DB");
});

app.delete("/user", (req, res) => {
    res.send("Successfully Deleted user from db");
});


// app.use("/hello/2", (req, res) => {
//     res.send("Hello again from Namaste Node!!:)");
// });

// app.use("/hello", (req, res) => {
//     res.send("Hello from Namaste Node!!:)");
// });

// //below code returns response same as /hello as /hello route overwrites this
// app.use("/hello/3", (req, res) => {
//     res.send("Hello again from Namaste Node 3rd time!!:)");
// });

// app.use("/test", (req, res) => {
//     res.send("Hellooo!!!");
// });

// app.use("/", (req, res) => {
//     res.send("Hello from the Home Page");
// });

app.listen(3000, () => console.log('Server is running on port 3000'));