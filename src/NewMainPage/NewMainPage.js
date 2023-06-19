import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';

function NewMainPage() {
    return (
        <div>
            <Header/>
            <div className="main-container">
                <AboutMe/>
                <Projects/>
            </div>
        </div>
    )
}

export default NewMainPage;