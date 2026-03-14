
import jwt from 'jsonwebtoken'
export const genToken = async (userId) => {
    try {
        const token = await jwt.sign({userId}, process.env.JWT_SERCRET_KEY, {expiresIn: "1d"});
        return token
        
    } catch (error) {
        console.log("Error while genrating token", error)
    }
}