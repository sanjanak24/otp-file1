import {useEffect,useState} from 'react';
import firebase from './firebase'
import axios from 'axios';
import './App.css';
import {Link, useNavigate} from 'react-router-dom';
// axios.defaults.baseURL = "http://localhost:8080/"

function Login(){
  const [usn, setUsn] = useState()
  const [mobile, setMobile] = useState()
  const [otp, setOtp] = useState()
  const navigate = useNavigate()

const configureCaptcha = () =>{

      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          this.onSignInSubmit();
          console.log("Recaptca varified")
        },
        defaultCountry: "IN"
      });
    }

const handleSubmit=(e)=>{
  e.preventDefault()
  configureCaptcha()
    const phoneNumber =  "+91" +  mobile
    console.log(phoneNumber)

    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      console.log("OTP has been sent")
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
      console.log("SMS not sent")
    });
    axios.post('http://localhost:3000/login',{usn,mobile})
    .then(result => {console.log(result)
      if(result.data === "success"){
        alert("data saved successfully")
      }

    
  }) 
  .catch(err=>console.log(err))
  }

   const onSubmitOTP = (e) =>{
        e.preventDefault()
        const code = otp
        console.log(code)
        window.confirmationResult.confirm(code).then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(JSON.stringify(user))
          alert("User is verified")
          navigate('/home')
          // ...
        }).catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
        });
      }
    return(
      <div>
        
              <div id="login-left"></div>
               <div id="login-right">
              
         			<div className="card col-md-8">
            
         				<div className="card-body">
               <h1 className="animate-character text-center"><b>Advitiya 2023</b></h1>
               <div id="container">
               <form onSubmit={handleSubmit} action="/login" method="post"> 
                <h2 className="login text-center text-secondary">Login</h2>
                <div id="sign-in-button"></div>
                 <div className="form-group">
                   <label  for="usn"><b>Usn</b></label>
                   <input type="text" className="form-control" id="usn" name="usn" onChange = {(e)=> setUsn(e.target.value)}  placeholder="Enter your usn"></input>
                   <label for="phoneno"><b>Phone no</b></label><br></br>
                   <input type="number" className="form-control" name="mobile" id="mobile" placeholder="Enter Mobile number"required onChange = {(e)=> setMobile(e.target.value)}></input>
                   <div className="text-center"><button className="col-md-4 btn btn-primary" type="submit"><b>Submit</b></button></div>
                 </div>  
             </form>
               <hr></hr>
               <div className="form-group">
                 <label><b>Enter OTP</b></label>
                  <form onSubmit={onSubmitOTP}>
                     <input className="form-control" type="number" name="otp" placeholder=" Enter OTP" required onChange = {(e)=> setOtp(e.target.value)}></input>
                     <div className="text-center"><button class="col-md-4 btn btn-primary" type="submit"><b>Enter OTP</b></button></div>
                  </form>
                 </div>
               </div> 
               </div>
               </div>
             </div>
               </div>
    );
}

export default Login;
// import React from 'react'
// import firebase from './firebase'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import {Link, useNavigate} from 'react-router-dom';

// class App extends React.Component {
//   handleChange = (e) =>{
//     const {name, value } = e.target
//     this.setState({
//         [name]: value
//       })
//   }
 

//   configureCaptcha = () =>{

//     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
//       'size': 'invisible',
//       'callback': (response) => {
//         // reCAPTCHA solved, allow signInWithPhoneNumber.
//         this.onSignInSubmit();
//         console.log("Recaptca varified")
//       },
//       defaultCountry: "IN"
//     });
//   }
    
//   onSignInSubmit = (e) => {
//     e.preventDefault()
//     this.configureCaptcha()
//     const phoneNumber =  "+91" + this.state.mobile
//     console.log(phoneNumber)
//     const appVerifier = window.recaptchaVerifier;
//     firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
//     .then((confirmationResult) => {
//       // SMS sent. Prompt user to type the code from the message, then sign the
//       // user in with confirmationResult.confirm(code).
//       window.confirmationResult = confirmationResult;
//       console.log("OTP has been sent")
//       // ...
//     }).catch((error) => {
//       // Error; SMS not sent
//       // ...
//       console.log("SMS not sent")
//     });
//   }

//   onSubmitOTP = (e) =>{
//     e.preventDefault()
//     const code = this.state.otp
//     console.log(code)
//     window.confirmationResult.confirm(code).then((result) => {
//       // User signed in successfully.
//       const user = result.user;
//       console.log(JSON.stringify(user))
//       alert("User is verified")
//       // ...
//     }).catch((error) => {
//       // User couldn't sign in (bad verification code?)
//       // ...
//     });
//   }
//   render() {
//     return (
//       <div>
        
//         <div id="login-left"></div>
//         <div id="login-right">
        
//   			<div class="card col-md-8">
      
//   				<div class="card-body">
//         <h1 class="animate-character text-center"><b>Advitiya 2023</b></h1>
//         <div id="container">
//         <form onSubmit={this.onSignInSubmit} action="/login" method="post"> 
//          <h2 class="login text-center text-secondary">Login</h2>
//          <div id="sign-in-button"></div>
//           <div class="form-group">
//             <label  for="usn"><b>Usn</b></label>
//             <input type="text" class="form-control" id="usn" required onChange={this.handleChange} placeholder="Enter your usn"></input>
//             <label for="phoneno"><b>Phone no</b></label><br></br>
//             <input type="number" class="form-control" name="mobile" id="mobile" placeholder="Enter Mobile number"required onChange={this.handleChange}></input>
//             <div class="text-center"><button class="col-md-4 btn btn-primary" type="submit"><b>Submit</b></button></div>
//           </div>  
//         </form>
//         <hr></hr>
//         <div class="form-group">
//           <label><b>Enter OTP</b></label>
//            <form onSubmit={this.onSubmitOTP}>
//               <input class="form-control" type="number" name="otp" placeholder=" Enter OTP" required onChange={this.handleChange}></input>
//               <div class="text-center"><button class="col-md-4 btn btn-primary  " type="submit"><b>Enter OTP</b></button></div>
//            </form>
//           </div>
//         </div> 
//         </div>
//         </div>
//       </div>
//         </div> 

    
//     )
//   }
// }
// export default App;



