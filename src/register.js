import React from 'react';
import './register.css';

const Register = () => {
    return (
        <div className='reg Container1'>
            <div>
                <h4>Join Us Today </h4>
                <p className='blabla'> Do you have authentic pharmacetical products? You can join the team alongside our partners and deliver the best to our clients, please fill the form below.</p>
            </div>
            <form className=''>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Password</label>
                    <input type="Password" className="form-control" id="inputPassword" placeholder="Password"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Pharmacy type </label>
                    <select className="form-control" id="exampleFormControlSelect1">
                    <option>clinical pharmacy</option>
                    <option>industrial pharmacy</option>
                    <option>hospital pharmacy</option>
                    <option>community pharmacy</option>
                    <option>home care pharmacy</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Your Specialties</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button> Submit </button>
            </form>
            
        </div>
    )
}

export default Register;