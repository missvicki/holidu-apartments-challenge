import React from 'react';
import './header.css'

function Header(){
    return (
    <div className="header">
        <h2 className="title">Holidu Apartments</h2>
        <div className="ui secondary menu">
            <a className="active item">Home</a>
            <div className="right menu">
                <div className="item">
                <div className="ui icon input">
                    <i aria-hidden="true" className="search icon"></i>
                    <input type="text" placeholder="Apartments, Location" />
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header;