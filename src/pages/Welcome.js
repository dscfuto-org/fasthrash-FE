import { Box } from "@chakra-ui/react";
import AboutUs from "../Components/AboutUs";
import Education from "../Components/Education";
import WebFooter from "../Components/WebFooter";
import WebBanner from "../Components/WebBanner";
import Patrons from "../Components/Patrons";

const Welcome = () => {
	return (
		<Box w='100%' h='100%' overflowX='hidden'>			
			<WebBanner />
			<Patrons />
			<Box pr="32px" pl="32px" pb="48px">
				<AboutUs />
				<Education />
			</Box>
			<WebFooter />
		</Box>
	);
}


export default Welcome