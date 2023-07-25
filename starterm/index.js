const express = require('express');
const app = express();
const tasks = require("./routes/tasks")
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
app.get('/hello',(req,res)=>{
    res.send("API is fine inn get method")
});
//to access the data inside the routes we use one middleware here named as express.json()
//middlewares
app.use(express.static('./public'))
app.use(express.json())
// app.use(notFound);
//this route connects to the get API meathod writtern inside the tasks
app.use('/api/v1/tasks',tasks);
  


const start = async()=>{
try{
    await connectDB();
    app.listen(8000);
}
catch(error){
    console.log(error)
}
}

start()