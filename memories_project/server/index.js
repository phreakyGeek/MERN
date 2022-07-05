import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts',postRoutes);

const CONNECTION_URL = "mongodb+srv://mridulinlko:mridul123@cluster0.2uuug.mongodb.net/?retryWrites=true&w=majority";
const PORT =  5000;

// await mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
//     .then(()=> console.log(`Server running on port}`))
    // .catch((error)=> console.log(error.message));

 mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)))
    .catch((error)=>  console.log(error.message))

// mongoose.set('useFindAndModify', false);