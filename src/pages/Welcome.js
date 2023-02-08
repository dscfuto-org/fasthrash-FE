import { Link } from "react-router-dom";
import { Text, Button, Flex, Box } from "@chakra-ui/react";

export default function Welcome() {
  return (
    <Flex
      flexDirection="column"
      gap="2rem"
      alignItems="center"
      h={480}
      justifyContent="center"
    >
      <Text fontSize="2xl">Welcome To Fast Trash</Text>
      <Box>
        <Button
          fontSize={16}
          fontWeight={600}
          lineHeight={24}
          _hover={{ color: "black", backgroundColor: "wheat" }}
          color="#fff"
          backgroundColor="#7F56D9;
"
          w={360}
        >
          <Link to="/signup">Get Started</Link>
        </Button>
      </Box>
    </Flex>
  );
}
