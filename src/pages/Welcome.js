import { Box } from "@chakra-ui/react";
import AboutUs from "../Components/AboutUs";
import Education from "../Components/Education";
import WebFooter from "../Components/WebFooter";
import WebBanner from "../Components/WebBanner";

const Welcome = () => {
	return (
		<Box w='100%' h='100%' overflowX='hidden'>
			<WebBanner />
			<AboutUs />
			<Box pr={{ base: '10px', md: "32px" }} pl={{ base: '10px', md: "32px" }} pb="48px">
				<Education />
			</Box>
			<WebFooter />
		</Box>
	);
}


export default Welcome