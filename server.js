require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')
const workerRouter = require('./routes/workerRoutes');
const sign = require('./routes/signRoutes');

const app = express()

app.use(cors({
    origin: "https://seek-seva-frontend.vercel.app",
    credentials: true
  }))
app.use(express.json());

app.use((req, res, next) =>{
    console.log(req.method, req.url)
    next()
})

connectDB();

app.use('/', sign )
app.use('/worker', workerRouter);

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`)
});