import { useParams } from "react-router-dom";
import React, { useEffect } from 'react'
import { Avatar, Box } from "@chakra-ui/react";
import { useColors } from "../../App";

const Dashboard = () => {
    const params = useParams();

    // ** CHANGE THE BACKGROUND COLOR TO BE GREY ON COMPONENT-DID-MOUNT
    useEffect(() => {
        document.querySelector('body').classList.add('grey')
    }, [])
    return (
        <React.Fragment>
            {/** DASHBOARD SIDEPANEL SECTION */}
            <Box className="side-panel">
                <Box className="center" h='55px' fontSize="1xl" fontWeight={600}>
                    FAST TRASH
                </Box>
            </Box>

            {/** DASHBOARD MAIN SECTION */}
            <Box className="main">
                <Box w='100%' px='5px' fontSize={17} fontWeight={600}>Welcome Back, Alex!</Box>
                <Box className="details-summary center">
                    <Box className="card">
                        <Box className="title">Total Alerts Created</Box>
                        <Box fontWeight={600} fontSize={{ md: '28px' }} mt='5px'>384, 657</Box>
                    </Box>
                    <Box className="card">
                        <Box className="title">Completed Alerts</Box>
                        <Box fontWeight={600} fontSize={{ md: '28px' }} mt='5px'>384, 657</Box>
                    </Box>
                    <Box className="card">
                        <Box className="title">Pending Alerts</Box>
                        <Box fontWeight={600} fontSize={{ md: '28px' }} mt='5px'>384, 657</Box>
                    </Box>
                </Box>
                <Box w='100%' h='2px' bg={useColors.appGreen} borderRadius='50%'></Box>
                <Box p='10px' w='100' borderRadius='5px' border='1px solid #eee' mt='20px' boxShadow='1px 1px 2px 0 rgba(42, 141, 0, 0.3)'>
                    <Box w='100%' fontWeight={600} p='10px' fontSize='15px'>Recent Transactions</Box>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Alert Created By</th>
                                <th>Alert Status</th>
                                <th>Total Alerts Created</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1.</td>
                                <td className="text-bold">
                                    <div className="flex">
                                        <Avatar src="" mr='5px' size='sm' />
                                        Alex Chima
                                    </div>
                                </td>
                                <td className="center"><div className="status success">Completed</div></td>
                                <td className="text-bold text-center">375</td>
                                <td className="center">

                                </td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td className="text-bold">
                                    <div className="flex">
                                        <Avatar src="" mr='5px' size='sm' />
                                        Chidera Promise
                                    </div>
                                </td>
                                <td className="center"><div className="status warning">Pending</div></td>
                                <td className="text-bold text-center">375</td>
                                <td className="center">

                                </td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td className="text-bold">
                                    <div className="flex">
                                        <Avatar src="" mr='5px' size='sm' />
                                        Victor Raphael
                                    </div>
                                </td>
                                <td className="center"><div className="status info">Requested</div></td>
                                <td className="text-bold text-center">375</td>
                                <td className="center">

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Box>
            </Box>

        </React.Fragment>
    )
}

export default Dashboard
