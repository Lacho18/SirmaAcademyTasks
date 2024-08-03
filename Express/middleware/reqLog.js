function reqLog(req, res, next) {
    console.log(`${req.url} -> ${req.method}`);

    next();
}

module.exports = { reqLog };