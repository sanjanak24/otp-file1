import firebase from './firebase'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import Articulation from './Articulation'
import Artistic from './Artistic'
import Bugbusters from './Bugbusters'
import Hack from './Hack'
import Mindtech from './Mindtech'
import io from 'socket.io-client';
import "https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.3.2/socket.io.js"

 function App(){
  // const src = src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.3.2/socket.io.js";
  // const socket = io('http://localhost:3000');
  // socket.on('notification', (message) => {
  //   alert(`New Notification: ${message}`);
  // });

  // function sendNotification() {
  //   socket.emit('newNotification');
  // }
    return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/articulation' element={<Articulation/>}></Route>
      <Route path='/artistic' element={<Artistic/>}></Route>
      <Route path='/bugbusters' element={<Bugbusters/>}></Route>
      <Route path='/hack' element={<Hack/>}></Route>
      <Route path='/mindtech' element={<Mindtech/>}></Route>
      


      

    </Routes>
    </BrowserRouter>


  //   <div>
  //     <h1>Real-time Notifications</h1>
  // <button onclick="sendNotification()">Send Notification</button>

  //   </div>

    
    );
  }

export default App;



