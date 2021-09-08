import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import FirstPart from '../components/FirstPart';
import InfoPart from '../components/InfoPart';
import Footer from '../components/Footer/index';
import { firstData, secondData, thirdData, fourthData } from '../components/InfoPart/Data';
import ScrollToTop from '../components/ScrollToTop';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <ScrollToTop />
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <FirstPart />
            <InfoPart {...firstData}/>
            <InfoPart {...secondData}/>
            <InfoPart {...thirdData}/>
            <InfoPart {...fourthData}/>
            <Footer />
        </>
    )
}

export default Home;
