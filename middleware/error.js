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
            `Bootcamp not found with id: ${err.value}`,
            404,
        );
    }

    if (err.name === "MongoError" && err.code === 11000) {
        error = new ErrorResponse("Duplicate field value entered", 400);
    }

    if (err.name === "ValidationError") {
        const combinedMessage = Object.values(err.errors).map(
            val => val.message,
        );
        error = new ErrorResponse(combinedMessage, 400);
    }

    res.status(error.statusCode || 500).json({
        status: false,
        message: error.message || "Internal server error",
    });
};

module.exports = errorHandler;
