import React from "react";
import '../styles.css';
import logo from '../images/logo.png';

export default function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Logo" />
        </div>
    );
}
