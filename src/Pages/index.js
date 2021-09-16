import React, {useState} from 'react';
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import MovieSection from "../Components/MovieSection";
import InfoSection from "../Components/InfoSection";
import {homeObjOne} from "../Components/InfoSection/Data";


export const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
      setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen = {isOpen} toggle = {toggle}/>
            <Navbar toggle={toggle}/>
            <MovieSection />
            <InfoSection {...homeObjOne} />
        </>
    )
}

export default Home;