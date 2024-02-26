import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg navcolor " style={{display:'flex'  }}>
                <div className="container-fluid">
                    <img src="./logo.png" width={40} alt="" />&nbsp;&nbsp;
                    <Link className="navbar-brand " style={{fontFamily:'serif'}}>
                        Vidish Portfolio
                    </Link>
     




                    <div className="collapse navbar-collapse  font " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to='home' style={{marginLeft:'350px'}}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='about'>
                                    About
                                </Link>
                            </li>
                           
                            
                               
                            <li className="nav-item">
                                <Link className="nav-link  " to='contact'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" >
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                style={{borderRadius:'90px',color:'Blue'}}
                            />

                        </form>
                    </div>
                </div>
            </nav>



        </>
    )
}

export default Navbar
