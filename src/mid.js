import React from 'react';
import Load from './Load';
import Register from './register';
import './mid.css'

const Mid = () => {
    return (
        <div className="flex-container">
        <div  className ='flex1'>
    <Load />
        </div>  
        <div className ='flex2' >
    <Register />
        </div>
        </div>
    );
} ;

export default Mid;