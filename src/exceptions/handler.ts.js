
errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    const code = err.code || 500;
    return res.status(code).json({
        "code": code,
        "message": err.message || "Internal server error"
    });
}

notFoundHandler = (req, res, next) => {
    return res.status(404).json({
        "code": 404,
        "message": "Not found"
    });
}
module.exports = errorHandler;
module.exports = notFoundHandler;