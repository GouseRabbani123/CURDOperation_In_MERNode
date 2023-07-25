const mongoose = require('mongoose');
const connectDB = (url)=>{
mongoose.connect('mongodb://localhost:27017/SimpleAPI').then(()=>{
    console.log('connected to monoose')
})
.catch((error)=>{
    console.log('error')
})
}
module.exports = connectDB;