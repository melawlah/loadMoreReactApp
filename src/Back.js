import React from 'react';
import Drug2 from './newdrug.jpg';
import './Back.css';

const Back = () => {
    return( 
        <div className="">
            <img src={ Drug2 } alt="" className = 'bimg'/>
            <div className="centered text">
            <h3 className ='font1'> Welcome!</h3> 
            <h5 className='font2'> You can't find that prescription the doctor gave you? Great! You've come to the right place.</h5>
            </div>
        </div>
        
    );
    }

export default Back;