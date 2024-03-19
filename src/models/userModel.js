import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter a username"],
        unique: true,

    },
    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        required: [true, "Please enter a password"],
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExp: Date,
    verifyToken: String,
    verifyTokenExp: Date,
})


const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;