import {useEffect,useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import './App.css';
axios.defaults.baseURL = "http://localhost:8080/";


function Signup(){
  const [name, setName] = useState()
  const [usn, setUsn] = useState()
  const [mobile, setMobile] = useState()
  const [email, setEmail] = useState()
  const [branch, setBranch] = useState()
  const [year, setYear] = useState()
  const [isAdmin,setAdmin] = useState()
  const navigate = useNavigate()
  const [secretKey, setSecretKey] = useState("");
  const [userType, setUserType] = useState("");



const handleSubmit=(e)=>{
  if(userType == "Admin" && secretKey!="SanjanaK"){
      alert("invalid admin")
  }
  else{
  e.preventDefault()
  axios.post('http://localhost:3001/',{name,usn,mobile,email,branch,year,isAdmin})
  .then(result => {console.log(result)
    alert("data saved successfully")
    navigate('/login')
  }) 
  .catch(err=>console.log(err))
  }

  }

  

    
 
  
    return(
    <div className = "container col-md-3">
    <form onSubmit={handleSubmit} >
    
    <div className="form-group">
        <h2 className="text-center signup"><b>SIGNUP</b></h2>
        <div>
        Register As
            <input type="radio" name="UserType" value="User" onChange={(e) => setUserType(e.target.value)} />
            User
            <input type="radio" name="UserType" value="Admin" onChange={(e) => setUserType(e.target.value)} />
            Admin
    </div>
          {userType == "Admin" ? (
            <div className="mb-3">
              <label>Secret Key</label>
              <input type="text" className="form-control" placeholder="Secret Key" onChange={(e) => setSecretKey(e.target.value)}/>
            </div>
          ) : null}
        <label for="name"><b>Name:</b></label>
        <input type="text" id="name" className="form-control" placeholder="Enter your name" onChange = {(e)=> setName(e.target.value)} required/>
        <label for="usn"><b>USN:</b></label>
        <input type="text" id="usn" className="form-control" placeholder="Enter your usn" name="usn" onChange = {(e)=> setUsn(e.target.value)} required/>
        <label for="number"><b>Phoneno</b>:</label>
        <input type="number" id="mobile" className="form-control" placeholder="Enter your phoneno" name="mobile" onChange = {(e)=> setMobile(e.target.value)}  required/>
        <label for="email"><b>Email:</b></label>
        <input type="email" id="email" className="form-control" name="email" placeholder="Enter your email" onChange = {(e)=> setEmail(e.target.value)} required/>
        <label for="branch"><b>Branch:</b></label>
        <input type="text" id="branch" className="form-control" name="branch" placeholder="Enter your branch" onChange = {(e)=> setBranch(e.target.value)} required/>
        <label for="year"><b>Year:</b></label>
        <input type="number" id="year" className="form-control" name="year"placeholder="Enter your year"onChange = {(e)=> setYear(e.target.value)}  required/>
        
        <div className="text-center "><button  className=" btn btn-primary" type='Submit'>Register</button></div>

    </div>

    </form>
    <p>Already have an Account ? <Link to="/Login" className=" ">Login</Link></p>
     </div>
    );
}

export default Signup;