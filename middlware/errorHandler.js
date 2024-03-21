const {constants} = require("../constants")
const errorHandler = (err, req, res, next) => {

    const statusCode = err.statusCode || 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title:"Validation Failed",message: err.message, stackTrack: err.stack
            });
            
            break;
        case constants.NOT_FOUND:
            res.json({
                title:"Not Found",message: err.message, stackTrack: err.stack
            });

            break;
        case constants.UNAYTHORIZED_ERROR:
            res.json({
                title:"UNAYTHORIZED",message: err.message, stackTrack: err.stack
            });

            break;
        case constants.FORBIDDEN:
            res.json({
                title:"FORBIDDEN",message: err.message, stackTrack: err.stack
            });

            break;
        default:
            console.log("No ERRORS");
            break;
    }
    
    
};

module.exports = errorHandler;