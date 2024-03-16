import React, { useState } from 'react'
import './home.css'
import About from '../about/About'
import Contact from '../contact/Contact'
import Skills from '../skills/Skills'
import toast, { Toaster } from 'react-hot-toast'


const Home = () => {
  const [state,setState]=useState([]);

  const hireme =()=>{
    setState(toast.success("Congratulations You Are Hired!"))
  }

  return (
    <> 
       <div className="container-fuid">
         <div className="row">
          <div className="col-md-6">
             
          <h4 style={{ marginTop:'18%',marginLeft:'20%',color:'rgba(30, 30, 30, 0.902)'}} >Hello,</h4>
          <h1 style= {{marginLeft:'20%',color:'rgba(30, 30, 30, 0.902)'}}>I'm &nbsp;<span style={{color:'rgba(235, 214, 24, 0.927)'}}>Vidish</span></h1>
          <h1 style= {{marginLeft:'20%',color:'rgba(30, 30, 30, 0.902)'}}>Web Developer</h1>
  
          <p style= {{marginLeft:'20%',fontFamily:'sans-serif',color:'rgba(30, 30, 30, 0.902)'}} >I'm a skilled and passionate web developer  with experience in creating appealing <br />and user-friendly websites.</p>
           
          <button onClick={hireme} className='hire' type="button"> <img src="./owner.png " width= '25px'/>&nbsp;Hire me</button>
             <Toaster toastOptions={
              {
                style:{
                  color:'rgba(235, 214, 24, 0.927)',
                  background:'white'
                }
              }
             }/>
          </div>
         </div>
         <div className="row">
           <div className="col-md-6">
           <img  src="./logo.png" style={{ position:'absolute',marginLeft:'65%', marginTop:'-17%'}} width='340px' alt="" />
           
           </div>
         </div>
       </div>

       

   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />

    <About/>


    <br />
    <br />
    <br />
    <br />

    
   <Skills/>
  
    <br />

    <Contact/>
 



    </>
  )
}

export default Home
