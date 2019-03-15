import React from 'react';
import Real from './real.png';
import './nav.css'

const Nav = () => {
        return (
            <div>
              <nav className="navbar sticky-top navbar-expand-lg">
                <a className="navbar-brand" href="nil"> <img src = { Real } alt ='logo' className = 'logo'/> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active ">
                <a className="nav-link hmmm" href="mm">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item ">
                <a className="nav-link hmmm" href="m">Products</a>
                </li>
                {/* <li className="nav-item ">
                <a className="nav-link hmmm" href="#">Log In</a>
                </li> */}
                <li className="nav-item ">
                <a className="nav-link hmmm" href="mmm">Sign Up</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></form>
                </div>
              </nav>

            </div>
        );
    }


export default Nav