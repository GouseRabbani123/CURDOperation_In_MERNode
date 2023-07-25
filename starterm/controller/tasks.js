const Task = require('../models/Task');

const getAllTasks = async (req,res)=>{
    try{
const tasks = await Task.find({})
res.status(200).json({tasks})
    }catch(error){
res.status(500).jsosn({msg:error})
    }

}
//we are posting the data from the api by this
const createTasks =async (req,res)=>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task})
    }
    catch(error){
res.status(500).json({msg:error})
    }
}
//If the client makes a request to /users/123, then req.params.id will be '123'.
const getTask = async (req,res)=>{
    //here we get only one task from the list of tasks n the object with the help of params and id we will get that perticular data insidde that peerticular id
    try{
        const{id:taskID} = req.params
        const task = await Task.findOne({_id:taskID});
     if(!task){
        return res.status(404).json({msg:`NO task with id:${taskID}`})
    }
    res.status(200).json({task})
    }catch(error){
        res.status(500).json({msg:error})
    }
   
}
//we not ony need the id but we also need the body to update 
const updateTask = async (req,res)=>{
   try{
    const {id: taskID} = req.params;
    const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
        new:true,
        runValidators:true,
    })
    if(!task){
        return res.status(404).json({msg:`No task with id : ${taskID}`})
    }
    res.status(200).json({task})
}
   catch(error){
    res.status(505).json({msg:error})
   }
  }

//deleting the perticular task by its id
const deleteTask = async (req,res)=>{
    try{
    const {id:taskID} = req.params
    const task = await Task.findOneAndDelete({_id:taskID})
if(!task){
return res.status(404).json({msg:`No task with ID ${taskID}`})
}
return res.status(200).json({task})
}
catch(error){
    res.status(500).json({msg:error})
}
}


const createTask=

module.exports = {

    getAllTasks,
    createTasks,
    getTask,
    updateTask,
    deleteTask 

}