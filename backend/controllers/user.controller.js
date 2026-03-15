import userModel from "../models/user.model.js";

const getcurrentUserController = async (req, res) => {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(400).json({
                message: "User ID is missing",
                success: false
            })
        }

        const user = await userModel.findById(userId).select("-password");
        if (!user) {
            return res.status(404).json({
                message: "User not found",
                success: false
            })
        }

        return res.status(200).json({
            message: "User fetched successfully",
            success: true,
            user
        })
        
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message,
            success: false
        })
    }
}

export {
    getcurrentUserController
}