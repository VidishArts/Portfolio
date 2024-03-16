import React from 'react'
import './skill.css'
import { Link } from 'react-router-dom'

const Skills = () => {
  return (
    <>

      <div className="container-fluid" style={{marginTop:'5%', marginLeft:'16%'}}>
        <div className="row">
          <div className="col-md-8">



            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={0}
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={1}
                  aria-label="Slide 2"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={2}
                  aria-label="Slide 3"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={3}
                 
                />
                
              </div>
              <div className="carousel-inner p-3 mb-5 rounded boxshadow">
                <div className="carousel-item active">
                  <img src="/movies.jpeg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className='text-danger'>F - Movies</h5>
                    <a href="https://moviess-eight.vercel.app/">
                        <button className='button' type="submit">Open</button>
                    </a>
                  </div>
                </div>
                <div className="carousel-item active">
                  <img src="/coffee.jpeg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className='text-danger'>Coffee Kala</h5>
                    <a href="">
                        <button className='button' type="submit">Open</button>
                    </a>
                  </div>
                </div>
                <div className="carousel-item active">
                  <img src="/form.jpeg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className='text-danger'>Employee Form</h5>
                    <a href="https://form-liard-phi.vercel.app/employ">
                        <button className='button' type="submit">Open</button>
                    </a>
                  </div>
                </div>
                <div className="carousel-item active">
                  <img src="/calculator.jpeg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className='text-danger'>Calculator</h5>
                    <a href="https://calculatewithme.vercel.app/">
                        <button className='button' type="submit">Open</button>
                    </a>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Skills
