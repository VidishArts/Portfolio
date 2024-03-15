import React from 'react'
import './home.css'
import About from '../about/About'
import Contact from '../contact/Contact'
import Skills from '../skills/Skills'

const Home = () => {
  return (
    <> 
       <div className="container"> 
        <h4 style={{ marginTop:'18%',marginLeft:'6%',color:'rgba(30, 30, 30, 0.902)'}} >Hello,</h4>
        <h1 style= {{marginLeft:'6%',color:'rgba(30, 30, 30, 0.902)'}}>I'm &nbsp;<span style={{color:'rgba(235, 214, 24, 0.927)'}}>Vidish</span></h1>
        <h1 style= {{marginLeft:'6%',color:'rgba(30, 30, 30, 0.902)'}}>Web Developer</h1>

        <p style= {{marginLeft:'6%',fontFamily:'sans-serif',color:'rgba(30, 30, 30, 0.902)'}} >I'm a skilled and passionate web developer  with experience in creating appealing <br />and user-friendly websites.</p>

        <button className='hire' type="button"> <img src="./owner.png " width= '25px'/>&nbsp;Hire me</button>
       </div>

       <img src="./logo.png" style={{marginLeft:'65%', marginTop:'-20%'}} width='400px' alt="" />

       

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
