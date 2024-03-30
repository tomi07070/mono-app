import mongoose from "mongoose";

const DayScheema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        }
    }
)

const Day = mongoose.model("Day", DayScheema)

export default Day