import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { Avatar, Box } from "@chakra-ui/react";
import { useColors } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import {
  addToState,
  completed,
  Accepted,
  AcceptingUpdate,
} from "../../store/alerts";
import { useLoaderData } from "react-router-dom";
import History from "./history";
const Dashboard = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { data, dashboardData } = useLoaderData();
  const {
    items,
    completed: complete,
    pending: pend,
    Accepted: accepted,
  } = useSelector((state) => state.alert);

  // ** CHANGE THE BACKGROUND COLOR TO BE GREY ON COMPONENT-DID-MOUNT
  useEffect(() => {
    // document.querySelector("body").classList.add("grey");
    dispatch(addToState({ data: data.alerts }));
    // dispatch(completed({ id: "63eca0f32df0965714777753" }));
    // dispatch(Accepted({ id: "63f8a89cf54256e65cfe8e46" }));
  }, [data]);
 

  return (
    <React.Fragment>
      {/** DASHBOARD SIDEPANEL SECTION */}
      <Box className="side-panel">
        <Box className="center" h="55px" fontSize="1xl" fontWeight={600}>
          FAST TRASH
        </Box>
      </Box>

      {/** DASHBOARD MAIN SECTION */}
      <Box className="main">
        <Box w="100%" px="5px" fontSize={17} fontWeight={600}>
          {/* Welcome Back, {dashboardData.businessName} */}
        </Box>
        <Box className="details-summary center">
          <Box className="card">
            <Box className="title">Total Alerts Created</Box>
            <Box fontWeight={600} fontSize={{ md: "28px" }} mt="5px">
              {items.length}
            </Box>
          </Box>
          <Box className="card">
            <Box className="title">Completed Alerts</Box>
            <Box fontWeight={600} fontSize={{ md: "28px" }} mt="5px">
              {complete}
            </Box>
          </Box>
          <Box className="card">
            <Box className="title">Pending Alerts</Box>
            <Box fontWeight={600} fontSize={{ md: "28px" }} mt="5px">
              {pend}
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
