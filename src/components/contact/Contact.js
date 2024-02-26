import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="container" style={{ marginTop: '10%', marginLeft:'18%' }}>

          <h1 style={{marginBottom:'5%', marginLeft:'34%'}}>Contact <span style={{color:'rgba(235, 214, 24, 0.927)'}}>Me</span></h1>
        <div className="row">
          <div className="col-md-10">

        
            <form action="">



              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
              </div>
              <br />
              <br />
              <br />


              
              


              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email-Id"
                    aria-label="First name"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile Number"
                    aria-label="Last name"
                  />
                </div>
              </div>

              <br />
              <br />
              <br />
              
              


              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="How did you discover me?"
                    aria-label="First name"
                  />
                </div>
                <div className="col ">
                  <input
                    type="text"
                    className="form-control "
                    placeholder="Query"
                    aria-label="Last name"
                  />
                </div>
              </div>

                   <button type="submit" style={{marginTop:'4%',width:'110px', height:'40px',marginLeft:'45%' ,background:'rgba(235, 214, 24, 0.927)', borderRadius:'25px',fontSize:'20px',fontFamily:'segio' }} >Send it</button>



            </form>




          </div>
        </div>
      </div>

    </>
  )
}

export default Contact
