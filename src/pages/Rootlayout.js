import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import MainNAvigation from "./MainNavigation";

export default function Rootlayout() {
  return (
    <>
      <MainNAvigation />
      <Box
        backgroundColor="white"
        display="flex"
        flexDirection="column"
        alignItems="center"
        w="100%"
        h="100%"
        pt="96px"
        pr="32px"
        pl="32px"
        pb="48px"
      >
        {<Outlet />}
      </Box>
    </>
  );
}
