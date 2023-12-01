const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const StudentsModel = require('./models/students')

const app =express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/students");
app.post('/login',async(req,res)=>{
    try{
    const {usn,mobile,Admin} = req.body;
    if(!usn || !mobile){
        return res.json({
            error: "One or more values are missing"
        });
    }

    if(Admin == "SanjanaK"){
        StudentsModel.isAdmin = true;

    }
    const newUser = await StudentsModel.findOne({usn});
    const newPhone =  await StudentsModel.findOne({mobile});
    const admin = await StudentsModel.findOne({isAdmin})
    if(!newUser){
        return res.json({ error: "User not found"});
    }

    if(!newPhone){
        return res,json({error: "Please enter correct phoneno"})
    }

    if (admin.isAdmin) { // admin <--------------------
        console.log('admin');          
      }
    res.status(200).json({
        user1:{
        usn: user1._id,
        mobile: user1._id,
        }
    });
}
catch(error){
    return res.json({error:error});

}

    })


 
app.post('/',async(req,res)=>{
    try{
    const  {name, usn, mobile, email, branch, year} = req.body;
    if(!name || !usn || !mobile || !email || !branch || !year){
        return res.json({error: "One or more values are missing"})
    }

    const existingUsn = await StudentsModel.findOne({usn})
    const existingMobile = await StudentsModel.findOne({mobile})

    if(existingUsn){
        return res.json({error:'user already exists'});
    }
    if(existingMobile){
        return res.json({error:'Mobile number already exists'});
    }
    
    const newUser = await new StudentsModel({
        name,
        usn,
        mobile,
        email,
        branch,
        year,
    }).save();

res.json({
    user1:{
    name: user1.name,
    usn: user1.usn,
    mobile:user1.mobile,
    email:user1.email,
    branch:user1.branch,
    year:user1.year,
    }
});
}
catch(error){
console.log(error)
return res.json({ error: error});
}
})

app.listen(3001, ()=>{
    console.log("Server is running")
})



// .then(()=>{
//     console.log("connected to DB")
//     app.listen(PORT,()=>console.log("Server is running"))
// })

// .catch((err)=>console.log(err))


// const PORT = process.env.PORT || 8080

// //schema
// const schemaData = mongoose.Schema({
//     name:String,
//     usn:String,
//     mobile:Number,
//     email:{type:String,unique:true},
//     branch:String,
//     year:Number
// },{
//     timestamps : true
// })

// const userModel = mongoose.model("user", schemaData)

// //read
// // http://localhost:8080/
// app.get("/",async(req,res)=>{
//     const data = await userModel.find({})
//     res.json({success : true, data : data})
// })


// //create data || save data on mongo db
// // http://localhost:8080/create/
// /*
// {
// name,
// mobile
// }
// */
// app.post("/create",async(req,res)=>{
//     const data = new userModel(req.body)
//     await data.save()
//     res.send({success : true, message : "data saved successfully", data:data})
// })

// //update data
// // http://localhost:8080/update/
// /*
// {
//     id:"".
//     name:"",
//     mobile:""
// }
// */

// app.put("/update",async(req,res)=>{
//     console.log(req.body)
//     const {id,...rest} = req.body
//     console.log(rest)
//     const data = await userModel.updateOne({_id : id},rest)
//     res.send({success : true, message : "data updated successfully", data:data})
// })

// // //delete data
// // //http://localhost:8080/delete/id

// // app.delete("/delete/:id",async(req,res)=>{
// //     const id = req.params.id
// //     console.log(id)
// //     const data = await userModel.deleteOne({_id:id})
// //     res.send({success : true, message : "data deleted successfully", data:data})

// // })

// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const admin = require('firebase-admin');
// const http = require('http');
// const socketIo = require('socket.io');

// const app = express();
// app.use(bodyParser.json());

// Initialize Firebase Admin SDK
// ... (same as previous code)

// Connect to MongoDB (same as previous code)
// ... (same as previous code)

// Define MongoDB schema and model (same as previous code)
// ... (same as previous code)

// Start HTTP server
// const server = http.createServer(app);
// const io = socketIo(server);

// // Socket.IO connection handling
// io.on('connection', (socket) => {
//   console.log('User connected');

//   // Example: Send a notification to all connected clients
//   socket.on('newNotification', () => {
//     io.emit('notification', 'New event or notification!');
//   });

//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//   });
// });

// Signup endpoint - Generate OTP and store user data
// ... (same as previous code)

// Login endpoint - Verify OTP and complete registration
// ... (same as previous code)

// Start the server
// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });





