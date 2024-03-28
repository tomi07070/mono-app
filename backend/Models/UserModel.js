import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
          fullname: {
               type: String,
               required: true
          },
          gender: {
               type: String,
               required: true,
               enum: ["male", "female"],
          },
          goals: {
               type: String,
               required: true,
               enum: ["losing weigth", "gaining muscle", "maintenence"]
          },
          notifications: {
               type: String,
               required: true,
               enum: ["usually", "often", "hardly ever"]
          } 
    },
    {timestamps: true}
)

const User = mongoose.model("User", userSchema)

export default User