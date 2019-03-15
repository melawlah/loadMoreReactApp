import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Back from './Back';
import Nav from './nav';
import Mid from './mid';
import 'tachyons';
import Footer from './footer';
import * as serviceWorker from './serviceWorker';


ReactDOM.render((<div>
    <Nav />
    <Back />
    <Mid />
    <Footer /> 
</div>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
