const adminAuth = (req, res, next) => {
    const token = "abc";
    const isUserAuthorized = token === "abc";

    if (isUserAuthorized) {
        next();
    } else {
        res.status(401).send("User is not Authorized");
    }
};

const userAuth = (req, res, next) => {
    const token = "abc";
    const isUserAuthorized = token === "abc";

    if (isUserAuthorized) {
        next();
    } else {
        res.status(401).send("User is not Authorized");
    }
};

module.exports = {
    adminAuth,
    userAuth
};