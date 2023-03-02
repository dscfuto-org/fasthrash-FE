import { Box } from "@chakra-ui/react";
import { Link, useLocation, useRouteLoaderData } from "react-router-dom";
import { useColors } from "../App";
import React, { useRef, useEffect } from 'react'
import { useAppContext } from "../context";
import { FaTimes } from 'react-icons/fa'

function MainNavigation() {
    const token = useRouteLoaderData("root");

    // ** GET CURRENT ROUTE FROM REACT ROUTER DOM
    const { pathname } = useLocation();

    // ** GET APP CONTEXT STORE
    const { activeNavLinkId, setActiveNavLinkId } = useAppContext()

    const navRef = useRef();
    const toggleNavbar = () => {
        document.body.classList.toggle('body-sticky-on-header-open');
        navRef.current.classList.toggle('responsive');
    }

    // ** RESET THE ACTIVENAVLINK TO NULL IF URL DOES NOT INCLUDE # USED IN THE SINGLE PAGES ROUTING
    useEffect(() => {
        if (!pathname.includes('#')) setActiveNavLinkId('')
    }, [pathname, setActiveNavLinkId])

    // ** ROUTING LINKS
    const navLinks = [
        /** IF YOU MAKE CHANGES TO ANY OF THE 'navLinkId' OR 'scrollToId', DO ENSURE YOU REPLICATE THE CHANGES 
         * IN THE RESPECTIVE COMPONENTS FILES RENDERING THOSE SECTIONS
        **/
        { navLinkId: 'Home', icon: '', scrollToId: 'homeContainer', link: '/#home' },
        { navLinkId: 'About Us', icon: '', scrollToId: 'aboutContainer', link: '/#about-us' },
        { navLinkId: 'Education', icon: '', scrollToId: 'educationContainer', link: '/#education' },
    ]

    // ** CUSTOM NAVLINK TO RENDER ROUTING TO SPECIFIC PAGE SECTION ON SINGLE PAGE
    const NavLink = ({ navLinkId, icon, scrollToId, link, activeNavLinkId, setActiveNavLinkId }) => {
        const handleClick = () => {
            toggleNavbar()
            setActiveNavLinkId(navLinkId);
            document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth' });
        };

        return (
            <Link
                to={link}
                id={navLinkId}
                style={{
                    color: activeNavLinkId === navLinkId ? useColors.appGreen : '#0009',
                    borderBottom: activeNavLinkId === navLinkId ? `2px solid ${useColors.appGreen}` : ''
                }}
                className='links'
                onClick={handleClick}
            >
                {icon}{navLinkId}
            </Link>
        );
    }

    return (
        <Box className="header">
            {/** WEBSITE LOGO SECTION */}
            <Box fontSize={{base: "1xl", md: '18px', lg: '20px'}} fontWeight={700} bgGradient='linear(to-l, #FAB20F, #2A8D00)' bgClip='text'>
                <Link to="/">FAST TRASH</Link>
            </Box>
            {/** MOBILE MENU BUTTON/SWITCH */}
            <Box onClick={toggleNavbar} className='toggle-open'>
                <Box w='30px'></Box>
                <Box w='25px'></Box>
                <Box w='30px'></Box>
            </Box>
            {/** WEB NAVIGATION SECTION */}
            <Box className="nav-wrapper" w='80%' ref={navRef}>
                <Box className="navigations" w='70%'>
                    <Box className="btn-close" onClick={toggleNavbar}><FaTimes /></Box>
                    <Box className="responsive-nav-logo">FAST RASH logo here</Box>
                    {navLinks.map(
                        ({ navLinkId, scrollToId, link, icon }, i) =>
                            <React.Fragment key={i}>
                                <NavLink
                                    navLinkId={navLinkId}
                                    icon={icon}
                                    scrollToId={scrollToId}
                                    link={link}
                                    activeNavLinkId={activeNavLinkId}
                                    setActiveNavLinkId={setActiveNavLinkId}
                                />
                                {i !== 2 && <span className="divider">|</span>}
                            </React.Fragment>
                    )}
                </Box>
                {/** AUTH BUTTONS SECTION */}
                <Box className="auth-block">
                    {token && <Link onClick={toggleNavbar} to="/logout">Logout</Link>}
                    {(!token && pathname !== '/login') && <Link onClick={toggleNavbar} to="/login">Login</Link>}
                    {(!token && pathname !== '/signup') &&
                        <Link to="/signup">
                            <Box onClick={toggleNavbar} fontSize={15} ml='4' fontWeight={600} color="#fff" background={useColors.appGreen} px='25px' py='10px' borderRadius='5px' transition='all 0.3s ease' _hover={{ opacity: .6 }}>
                                Sign Up!
                            </Box>
                        </Link>
                    }
                </Box>
            </Box>

        </Box>
    );
}

export default MainNavigation;
