export const sendInternalServerError = (res) => {
    console.log(res)
    res.status(500).json({
        success: false,
        message: 'Internal Server Error',
    });
}

export const sendCustomError = (res, statusCode, message) =>{
    res.status(statusCode).json({
        success: false,
        message,
    });
} 

export const sendCustomSuccess = (res, payload) =>{
    res.status(200).json({
        success: true,
        payload,
    });
} 