import React from 'react';
import { FaDiscord, FaInstagram, FaLocationDot, FaSchool } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Logo from '/InitiaLogo.png';

import './Footer.css';



const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__row">
                <div className="footer__left">
                    <Link to='/'><img src={Logo} alt="Initia Logo" className="footer__logo" /></Link>
                </div>
                <div className="footer__right">
                    <Link to='https://schools.friscoisd.org/campus/high-school/lone-star/home'><FaSchool/></Link>
                    <Link to="https://www.instagram.com/initia.club/"><FaInstagram /></Link>
                    <Link to="https://discord.gg/aNMqpFTrY7"><FaDiscord /></Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
