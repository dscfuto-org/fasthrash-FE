import { Text, Button, VStack, Flex, Link } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

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
      <VStack>
        <Button
          backgroundColor="#7F56D9;
"
          _hover={{ backgroundColor: "wheat" }}
          w={360}
        >
          <Link
            as={ReachLink}
            color="#fff"
            textDecoration="none"
            fontSize={16}
            fontWeight={600}
            to="/signup"
          >
            Get Started
          </Link>
        </Button>
      </VStack>
    </Flex>
  );
}
