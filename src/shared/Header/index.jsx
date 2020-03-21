import React from 'react';
import './header.css'

function Header(){
    return (
    <div className="header">
        <h2 className="title">Holidu Apartments</h2>
        <div class="ui secondary menu">
            <a class="active item">Home</a>
            <div class="right menu">
                <div class="item">
                <div class="ui icon input">
                    <i aria-hidden="true" class="search icon"></i>
                    <input type="text" placeholder="Apartments, Location" />
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header;