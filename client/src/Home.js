import React from 'react';
// import './App.css';
import './home.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from 'react-router-dom';
function Home(){
    return(

      <div>
        <div class="navbar">
          <h1>ADVITIYA EVENTS</h1>

        </div>

      
      <div class = "pro">
        <div class="go">
        <div class="grid">
          <div class="grid-item">
            <div class="card">
              <img class="card-img" src="https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,q_auto/v1/filestore/ftadn0my3xbr7jdlhiw28pe9iahv_image.jpg" alt="river" />
              <div class="card-content">
                <h1 class="card-header">ARTICULATION GALA</h1>
                
                <Link to="/Articulation" class=" ">Here</Link>
              </div>
            </div>
          </div>
    
    
          <div class="grid-item">
            <div class="card">
              <img
                class="card-img"
                src="https://www.tamilnadutourism.com/blog/wp-content/uploads/2019/12/chennai-temples-768x395.jpg"
                alt="temple"
              />
              <div class="card-content">
                <h1 class="card-header">ARTISTIC DISCOVERIES</h1>
               
                <Link to="/Artistic" class=" ">Here</Link>
              </div>
            </div>
          </div>
    
    
    
    
          <div class="grid-item">
            <div class="card">
              <img
                class="card-img"
                src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/09/Phibsoo-Wildlife-Sanctuary-cover.jpg"
                alt="wild"
              />
              <div class="card-content">
                <h1 class="card-header">BUGBUSTERS</h1>
               
                <Link to="/Bugbusters" class=" ">Here</Link>
              </div>
            </div>
          </div>
    
    
          <div class="grid-item">
            <div class="card">
              <img
                class="card-img"
                src="https://images.thrillophilia.com/image/upload/s--qqV-onPF--/c_fill,f_auto,fl_strip_profile,h_600,q_auto,w_975/v1/images/photos/000/166/624/original/1564727812_shutterstock_492011542.jpg.jpg?1564727812"
                alt="act"
              />
              <div class="card-content">
                <h1 class="card-header">HACK OVERFLOW</h1>
               
                
                <Link to="/Hack" class=" ">Here</Link>
              </div>
            </div>
          </div>
          
    
    
    
    
          <div class="grid-item">
            <div class="card">
              <img
                class="card-img"
                src="https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,q_auto/v1/filestore/lfvoy2ooobrmj8ojyyik1mk70ls4_image.jpg"
                alt="othe"
              />
              <div class="card-content">
                <h1 class="card-header">MINDTECH MYSTERY</h1>
                
                <Link to="/Mindtech" class=" ">Here</Link>
                

              </div>
            </div>
          </div>
    
        </div>
        </div>
        </div>
        </div>

        );
}

export default Home;