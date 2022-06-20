import React from 'react'
import lawoffice from '../img/lawoffice.jpeg'

    const Home = () => {
        return (
        <div className='header-content'>
            <h1>Home Page</h1>
            <div className='left-header'>
                <img src={lawoffice} alt="Law Office"/>
            </div>
            <p>Welcome to Litigation Manager. You can use the navigation bar to navigate through the list of lawyers to view their matters, create new lawyers, and view litigation information.</p>
        </div>
        );
    };

export default Home