import React from 'react';
import Header from './component/header/Header';
import Nav from './component/nav/Nav';
import About from './component/about/About';
import Skills from './component/skills/Skills';
import Experience from './component/experieince/Experience';
import Projects from './component/projects/Projects';
import Footer from './component/footer/Footer';

const App = () => {
    return(
        <>
            <Header/>
            <Nav/>
            <About/> 
            <Skills/>
            <Experience/>
            <Projects/>
            <Footer/>
        </>
    )
};

export default App;