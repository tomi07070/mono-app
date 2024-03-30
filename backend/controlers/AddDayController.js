import Day from "../Models/DayModel.js";

export const AddDays =  async(req,res) => {
    const {name} = req.body 
    const newDay = new Day({ name });
    try {
        await newDay.save()
        res.status(201).send(newDay)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

export const GetDays = async(req,res) => {
    try {
        const days = await Day.find({})
        res.status(200).send(days)
    } catch (error) {
       console.log(error) 
       res.status(400).send(error)
    } 
}