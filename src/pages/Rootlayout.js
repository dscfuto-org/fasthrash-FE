import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import React from "react";

export default function Rootlayout() {
	return (
		<React.Fragment>
			<MainNavigation />
			<Box
				background="white"
				display="flex"
				flexDirection="column"
				alignItems="center"
				w="100%"
				h="100%"
				mt='56px'
			>
				{<Outlet />}
			</Box>
		</React.Fragment>
	);
}
