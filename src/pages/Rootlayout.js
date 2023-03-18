import { Box } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import React from "react";
import { useEffect } from 'react'

export default function Rootlayout() {

	// ** This hook will auto scroll the pages to top on navigation to a new page...
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, [pathname])

	return (
		<React.Fragment>
			<MainNavigation />
			<Box
				display="flex"
				flexDirection="column"
				alignItems="center"
				w="100%"
				h="100%"
				mt='56px'
				overflowX='hidden'
			>
				{<Outlet />}
			</Box>
		</React.Fragment>
	);
}
