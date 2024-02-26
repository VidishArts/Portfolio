import React from 'react'
import './about.css'

const About = () => {
  return (
    <>
      <div className="container" >
         <div className="row">
          <div className="col-md-10" >
             
           <h1 style={{marginLeft:'450px',marginTop:'5%',fontFamily:'segio'}} > So, What Do I Do?</h1>

           <p style={{marginLeft:'250px',marginTop:'5%',fontFamily:'revert'}} >I'm a skilled and passionate web developer with experience in creating appealing
           and user-friendly websites. I have a strong understanding for design and a keen eye
           for details. I'm proficient in <strong> HTML , CSS, JAVASCRIPT, React-JS</strong> with a Creative mindset.</p>          
          </div>
         </div>
      </div> 

      <br />

      <br />

        <div className="container">
           <div className="col-md-12">
           <div class=" p-3 mb-5 rounded parchai" style={{width:'70%', marginLeft:'215px'}}><img src="./ui.png" width='50px' /> &nbsp; UI Designing </div>
           <div class=" p-3 mb-5 rounded parchai" style={{width:'70%', marginLeft:'215px'}}><img src="./react.png" width='50px' /> &nbsp; React-JS Developer</div>
           <div class=" p-3 mb-5 rounded parchai" style={{width:'70%', marginLeft:'215px'}}> <img src="./language.png" width='50px' /> &nbsp; HTML,CSS, JAVASCRIPT Expert</div>
           </div>
        </div>
    </>
  )
}

export default About
