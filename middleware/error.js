const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;
    // logging for dev
    for (key in err) {
        console.log(`${key}: ${err[key]}`);
    }

    if (err.name === "CastError") {
        error = new ErrorResponse(
            `CastError: Bootcamp not found with id: ${err.value}`,
            404,
        );
    }
    res.status(error.statusCode || 500).json({
        status: false,
        message: error.message || "Internal server error",
    });
};

module.exports = errorHandler;
