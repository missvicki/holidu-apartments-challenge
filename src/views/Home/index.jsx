import React from 'react';
import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import Main from '../../containers/Main';
import './home.css';

function Home(){
    return(
        <div className="page-container">
            <div id="content">
                <Header />
                <Main />
            </div>
            <Footer />
        </div>
    )
}

export default Home;