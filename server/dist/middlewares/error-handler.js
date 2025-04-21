"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMiddleware = void 0;
const errorHandlerMiddleware = (err, req, res, next) => {
    const customError = {
        statusCode: err.statusCode || 500,
        message: err.message || "Something went wrong",
    };
    res.status(customError.statusCode).json({ success: false, message: err.message });
};
exports.errorHandlerMiddleware = errorHandlerMiddleware;
