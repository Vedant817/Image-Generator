import mongoose from "mongoose";
const connectDB = (url)=>{
    mongoose.set('strictQuery', true) //* This will be useful when performing the search function.

    mongoose.connect(url).then(()=> console.log("MongoDB Connected")).catch((err)=> console.log(err))
}

export default connectDB