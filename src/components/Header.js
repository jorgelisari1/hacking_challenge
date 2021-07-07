import React from 'react';
import logo from '../assets/img/logo.png';
import phone from '../assets/img/phone.png';
import '../styles/header.css';
export const Header = () =>
    <div className="header" >
        <div >
            <img className="logo" src={logo} alt="logo" />
        </div>
        <div class="imagenPhone" >
            <p className="Roboto text-duda">¿Tienes alguna duda?</p>
            <img className="phone" src={phone} alt="phone" />
            <p className="Roboto mobile-login">Llámanos</p>
            <p className="Roboto mobile-login2">(01) 411 6001</p> </div>
    </div>
    ;