import React, { useCallback, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { useColors, SITE_NAME } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { addToState, accepted as accepteds } from "../../store/alerts";

import {
  Link,
  NavLink,
  useLoaderData,
  useLocation,
  Outlet,
  useParams,
} from "react-router-dom";
import { handleCloseNavbar, handleToggleNavbar } from "../MainNavigation";
import { FcHome, FcExport, FcTimeline } from 'react-icons/fc'

const Dashboard = () => {
  // ** GET CURRENT ROUTE FROM REACT ROUTER DOM
  const { pathname } = useLocation();
  const { profile } = useParams();

  const dispatch = useDispatch();
  const data = useLoaderData();

  const { businessName } = data?.user;
  const {
    items,
    completed: complete,
    pending: pend,
    Accepted: accepted,
    user,
  } = useSelector((state) => state.alert);
  // ** CHANGE THE BACKGROUND COLOR TO BE GREY ON COMPONENT-DID-MOUNT
  const getData = async () => {
    try {
      const response = await fetch(
        "https://fastrash-1337.ew.r.appspot.com/api/org/alerts/role?role=collector"
      );
      const { data } = await response.json();
      dispatch(
        addToState({ data: data.alert, id: profile, userName: businessName })
      );
    } catch (error) {
      //should return something
      console.log(error);
    }
  };
  // dispatch(accepteds({ id: "6423e82c7815821e08d1789b" }));

  useEffect(() => {
    getData();
    const interval = setInterval(() => {
      getData();
    }, 60000);
    return () => clearInterval(interval);
  }, []);
  return (
    <React.Fragment>
      {/** DASHBOARD SIDEPANEL SECTION */}
      <Box
        className="dashboard_navbar_side_overlay_bg"
        id="overlay"
        onClick={handleToggleNavbar}
      ></Box>
      <Box id="collapse-sidebar" className="side-panel">
        <Box position='relative' width='100%' height='100%'>
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
          <Box
            mt={0}
            py={1}
            width="100%"
            borderBottom="1px solid rgba(0, 0, 0, 30%)"
            borderTop="1px solid rgba(0, 0, 0, 30%)"
          >
            <Link onClick={handleCloseNavbar} to={`/dashboard/${profile}`}>
              <Box
                bg={!pathname.includes("history") ? "#eee" : "inherit"}
                display="flex"
                p={2}
                cursor="pointer"
                fontWeight={600}
                borderRadius="sm"
                my={1.5}
                _hover={{ bg: "#eee" }}
              >
                <FcHome style={{ fontSize: "20px", margin: "auto 5px" }} />
                <span className="nav-item">Dashboard</span>
              </Box>
            </Link>
            <Link onClick={handleCloseNavbar} to={`history`}>
              <Box
                bg={pathname.includes("history") ? "#eee" : "inherit"}
                display="flex"
                p={2}
                cursor="pointer"
                fontWeight={600}
                borderRadius="sm"
                my={1.5}
                _hover={{ bg: "#eee" }}
              >
                <FcTimeline style={{ fontSize: "20px", margin: "auto 5px" }} />
                <span className="nav-item">View History</span>
              </Box>
            </Link>
          </Box>
          <Box
            width="100%"
            borderTop="1px solid rgba(0, 0, 0, 30%)"
            position='absolute'
            bottom={'5px'}
            left={0}
          >
            <Link onClick={handleCloseNavbar} to={`/logout`}>
              <Box
                bg='#0009'
                display="flex"
                p={2}
                cursor="pointer"
                fontWeight={600}
                borderRadius="sm"
                mt={'10px'}
                color={'#fff'}
                _hover={{ bg: "#eee", color: '#000' }}
              >
                <FcExport style={{ fontSize: "20px", margin: "auto 5px" }} />
                <span className="nav-item">Sign Out</span>
              </Box>
            </Link>
          </Box>
        </Box>

      </Box>
      {/** DASHBOARD MAIN SECTION */}
      <Box id="main-section" className="main">
        <Box display="flex" w="100%" px="5px" fontSize={17} fontWeight={600}>
          Welcome{" "}
          <Text ml="5px" fontWeight={600} color={useColors.appGreen}>
            {businessName}
          </Text>
        </Box>
        <Box
          flexFlow={{ base: "column", md: "row" }}
          className="details-summary center"
        >
          <Box w={{ base: "100%", md: "100%" }} className="card danger">
            <Box className="title">Total Wastes Uncollected</Box>
            <Box
              textAlign="center"
              fontWeight={600}
              fontSize={{ base: "25px", md: "32px" }}
              mt="5px"
            >
              {pend}
            </Box>
          </Box>
          <Box w={{ base: "100%", md: "100%" }} className="card warning">
            <Box className="title">Accepted By You</Box>
            <Box
              textAlign="center"
              fontWeight={600}
              fontSize={{ base: "25px", md: "32px" }}
              mt="5px"
            >
              {accepted}
            </Box>
          </Box>
          <Box w={{ base: "100%", md: "100%" }} className="card success">
            <Box className="title"> Completed By You</Box>
            <Box
              textAlign="center"
              fontWeight={600}
              fontSize={{ base: "25px", md: "32px" }}
              mt="5px"
            >
              {complete}
            </Box>
          </Box>
          <Box w={{ base: "100%", md: "100%" }} className="card info">
            <Box className="title">Total Waste Alerts Created</Box>
            <Box
              textAlign="center"
              fontWeight={600}
              fontSize={{ base: "25px", md: "32px" }}
              mt="5px"
            >
              {items.length}
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
          <Box w="100%" fontWeight={600} p="10px" fontSize="15px">
            {!pathname.includes("history") ? 'Recent Collections' : 'Your Collections History'}
          </Box>
          <Outlet />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Dashboard;
