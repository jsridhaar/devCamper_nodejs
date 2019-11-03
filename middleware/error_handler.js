const ErrorHandler = (err, req, res, next) => {
    res.status(err.statusCode || 500).json({
        errorMessage : err.message || 'Server failure'
    })
}

export default ErrorHandler