//  src/app/models/user.js
import mongoose, { Schema, models } from "mongoose";


const userSchema = new Schema(
{
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "user",
    },
    team: {
        type: String,
        default: "UI",
    },
   
    
},
{timestamps: true}
);

const User = models.User || mongoose.model("User", userSchema);

export default User;
