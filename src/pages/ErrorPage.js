import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { THEME_COLOR, SITE_NAME } from "../App";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      w="100%"
      h="100%"
      display="flex"
      flexFlow="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box color={THEME_COLOR} fontSize="150px" fontWeight="600">
        {" "}
        404{" "}
      </Box>
      <Box mb="10px" fontSize="25px" fontWeight="600" color={THEME_COLOR}>
        Ooops!
      </Box>
      <Box fontWeight="600" textAlign="center">
        The requested URL was not found on our servers..npm stat!
      </Box>
      <Box
        mt="50px"
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Button
          onClick={() => navigate(-1)}
          w={{ sm: "50%", md: "auto" }}
          borderRadius="30px"
          color="#fff"
          bg={THEME_COLOR}
          _hover={{ bg: THEME_COLOR, opacity: 0.8 }}
          padding="20px 30px"
          mr="15px"
        >
          {" "}
          GO BACK{" "}
        </Button>
        <Button
          onClick={() => navigate("/")}
          w={{ sm: "50%", md: "auto" }}
          borderRadius="30px"
          color="#fff"
          bg={THEME_COLOR}
          _hover={{ bg: THEME_COLOR, opacity: 0.8 }}
          padding="20px 30px"
        >
          {" "}
          HOMEPAGE{" "}
        </Button>
      </Box>
      <Box
        textAlign="center"
        fontSize={14}
        color="grey"
        position="fixed"
        bottom="25px"
        left="0"
        right="0"
      >
        &copy; {new Date().getFullYear()} {SITE_NAME}
      </Box>
    </Box>
  );
};

export default ErrorPage;
