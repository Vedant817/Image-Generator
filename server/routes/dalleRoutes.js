import express from "express";
import * as dotenv from "dotenv";
// import { Configuration, OpenAIApi} from 'openai';
import OpenAI from "openai";

dotenv.config();
const router = express.Router();

// const configuration=new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// })

// const openai = new OpenAIApi(configuration);
const openai = new OpenAI({ //? Valid for newer versions.
    apiKey: process.env.OPENAI_API_KEY,
})

router.route('/').get((req,res)=>{
    res.send('Hello from DALL-E');
})

router.route('/').post(async (req,res)=>{ //? Create an image using OpenAI
    try {
        const {prompt} = req.body;
        const aiResponse= await openai.images.generate({
            model: "dall-e-3",
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json'
        });
        console.log(aiResponse);
        const image = aiResponse.data[0].url.b64_json;
        res.status(200).json({photo: image });
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

export default router;