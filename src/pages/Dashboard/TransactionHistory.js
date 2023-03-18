import React from 'react'
import { Link, useLoaderData, useParams, useLocation } from 'react-router-dom';
import { SITE_NAME, useColors } from '../../App';
import { handleCloseNavbar, handleToggleNavbar } from '../MainNavigation';
import { FcHome, FcTimeline } from 'react-icons/fc'
import { Box, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const TransactionHistory = () => {
    // ** GET CURRENT ROUTE FROM REACT ROUTER DOM
    const { pathname } = useLocation();
    const { profile } = useParams()

    const data = useLoaderData();
    const { businessName } = data.user
    const {
        items,
        completed: complete,
        pending: pend,
        Accepted: accepted,
    } = useSelector((state) => state.alert);
    
    console.log(data)
    return (
        <React.Fragment>
            {/** DASHBOARD SIDEPANEL SECTION */}
            <Box className='dashboard_navbar_side_overlay_bg' id='overlay' onClick={handleToggleNavbar}></Box>
            <Box id='collapse-sidebar' className="side-panel">
                <Box
                    className="center nav-logo"
                    h="55px"
                    fontSize={{ base: "22px", md: "20px", lg: "23px" }}
                    fontWeight={700}
                    bgGradient="linear(to-l, #FAB20F, #2A8D00)"
                    bgClip="text"
                >
                    {SITE_NAME}
                </Box>
                <Box mt={0} py={1} width='100%' borderBottom='1px solid rgba(0, 0, 0, 30%)' borderTop='1px solid rgba(0, 0, 0, 30%)'>
                    <Link onClick={handleCloseNavbar} to={`/dashboard/${profile}`}>
                        <Box bg={!pathname.includes('/history') ? '#eee' : 'inherit'} display='flex' p={2} cursor='pointer' fontWeight={600} borderRadius='sm' my={1.5} _hover={{ bg: '#eee' }}><FcHome style={{ fontSize: '20px', margin: 'auto 5px' }} /><span className='nav-item'>Dashboard</span></Box>
                    </Link>
                    <Link onClick={handleCloseNavbar} to={`/dashboard/history/${profile}`}>
                        <Box bg={pathname.includes('/history') ? '#eee' : 'inherit'} display='flex' p={2} cursor='pointer' fontWeight={600} borderRadius='sm' my={1.5} _hover={{ bg: '#eee' }}><FcTimeline style={{ fontSize: '20px', margin: 'auto 5px' }} /><span className='nav-item'>View History</span></Box>
                    </Link>
                </Box>
            </Box>

            {/** DASHBOARD MAIN SECTION */}
            <Box id='main-section' className="main">
                <Box display="flex" w="100%" px="5px" fontSize={17} fontWeight={600}>
                    Transactions History for {businessName}
                </Box>
                <Box flexFlow={{ base: 'column', md: 'row' }} className="details-summary center">
                    <Box w={{ base: '100%', md: '100%' }} className="card warning">
                        <Box className="title">Accepted Alerts</Box>
                        <Box textAlign='center' fontWeight={600} fontSize={{ base: '25px', md: "32px" }} mt="5px">
                            {accepted}
                        </Box>
                    </Box>
                    <Box w={{ base: '100%', md: '100%' }} className="card success">
                        <Box className="title">Completed Alerts</Box>
                        <Box textAlign='center' fontWeight={600} fontSize={{ base: '25px', md: "32px" }} mt="5px">
                            {complete}
                        </Box>
                    </Box>
                </Box>
                <Box w="100%" h="2px" bg={useColors.appGreen} borderRadius="50%"></Box>
                <Box
                    p="10px"
                    w="100"
                    borderRadius="5px"
                    border="1px solid #eee"
                    mt="20px"
                    boxShadow="1px 1px 2px 0 rgba(42, 141, 0, 0.3)"
                >
                    <Box w="100%" fontWeight={600} p="10px" fontSize="15px"> All Transactions </Box>

                </Box>
            </Box>
        </React.Fragment>
    )
}

export default TransactionHistory
