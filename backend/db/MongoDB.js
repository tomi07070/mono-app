import mongoose from "mongoose";

const ConnectDB = () => {
    mongoose
        .connect(process.env.MONGO_DB_URL)
        .then(()=>{
            console.log('connected to DB')
        })
        .catch((err)=>{
            console.log(err)
        })
}
export default ConnectDB