import mongoose, { Mongoose } from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    assistantName: {
        type: String,
        default: "Assistant"
    },
    history: [
        {
            type: String,
        }
    ]
}, {
    timestamps: true
})

const userModel = mongoose.model("users", userSchema);

export default userModel;