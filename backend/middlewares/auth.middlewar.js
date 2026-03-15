import jwt from 'jsonwebtoken'

export const authMiddleware = async(req, res, next) => {
try {
    const token = req.cookies.token;
    if (!token){
        return res.status(401).json({
            message: "Unauthorized User. Please login",
            success: false
        })
    }

const decoded = await jwt.verify(token, process.env.JWT_SERCRET_KEY);
req.userId = decoded.userId;
next();


} catch (error) {
    console.log("Error in authmiddleware: ",error)
    return res.status(401).json({
        message: "Authentication Failuer",
        success: false
    })
}
}