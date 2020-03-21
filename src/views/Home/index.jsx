import React from 'react';
import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import './home.css';

function Home(){
    return(
        <div className="page-container">
            <div id="content">
                <Header />
            </div>
            <Footer />
        </div>
    )
}

export default Home;