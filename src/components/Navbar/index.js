import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, 
    NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavBarElements';
import {IconContext} from 'react-icons/lib';

const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav= () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        }
        else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    });

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        JEREMY THE FRONTFREAK
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                Discover
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                Projects
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                Contact
                            </NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink to="/email">
                                Email me
                            </NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                    <h1>___</h1>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
