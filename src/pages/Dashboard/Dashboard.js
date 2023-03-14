import React, { useEffect } from "react";
import { Avatar, Box, Text } from "@chakra-ui/react";
import { useColors } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { addToState } from "../../store/alerts";
import { useLoaderData } from "react-router-dom";
import History from "./history";
const Dashboard = () => {
  const dispatch = useDispatch();
  const data = useLoaderData();
  const { businessName } = data.user;
  const {
    items,
    completed: complete,
    pending: pend,
    Accepted: accepted,
  } = useSelector((state) => state.alert);
  // ** CHANGE THE BACKGROUND COLOR TO BE GREY ON COMPONENT-DID-MOUNT
  useEffect(() => {
    const getData = async () => {
      try {
        //you can change the api to get data so far collectors have no data in their api
        const response = await fetch(
          "https://fastrash-1337.ew.r.appspot.com/api/org/alerts/?role=collector"
        );
        const { data } = await response.json();
        dispatch(addToState({ data: data.alert }));
      } catch (error) {
        //should return something
        console.log(error);
      }
    };

    getData();
  }, [dispatch]);

  console.log(items)

  return (
    <React.Fragment>
      {/** DASHBOARD SIDEPANEL SECTION */}
      <Box id='collapse-sidebar' className="side-panel">
        <Box className="center" h="55px" fontSize={{ base: "1xl", md: '18px', lg: '20px' }} fontWeight={700} bgGradient='linear(to-l, #FAB20F, #2A8D00)' bgClip='text'>
          FAST TRASH
        </Box>
      </Box>

      {/** DASHBOARD MAIN SECTION */}
      <Box className="main">
        <Box display='flex' w="100%" px="5px" fontSize={17} fontWeight={600}>
          Welcome Back <Text ml='5px' fontWeight={600} color={useColors.appGreen}>{businessName}</Text>
        </Box>
        <Box className="details-summary center">
          <Box className="card danger">
            <Box className="title">Pending Alerts</Box>
            <Box fontWeight={600} fontSize={{ md: "28px" }} mt="5px">
              {pend}
            </Box>
          </Box>
          <Box className="card warning">
            <Box className="title">Accepted</Box>
            <Box fontWeight={600} fontSize={{ md: "28px" }} mt="5px">
              {accepted}
            </Box>
          </Box>
          <Box className="card success">
            <Box className="title">Completed Alerts</Box>
            <Box fontWeight={600} fontSize={{ md: "28px" }} mt="5px">
              {complete}
            </Box>
          </Box>
          <Box className="card info">
            <Box className="title">Total Alerts Created</Box>
            <Box fontWeight={600} fontSize={{ md: "28px" }} mt="5px">
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
            Recent Transactions
          </Box>
          <History items={items} />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Dashboard;
