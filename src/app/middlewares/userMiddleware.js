module.exports = function signUpMiddleware(req, res, next) {
    res.json(req.body);
    next();
}
