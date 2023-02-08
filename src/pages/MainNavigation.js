import { Flex, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function MainNAvigation() {
  return (
    <nav>
      <Flex
        width="100%"
        margin="auto"
        justifyContent="space-between"
        p="2.5"
        borderBottom="1px"
        borderColor="#F2F4F7"
      >
        <Flex alignItems="center" pl="2rem">
          <Text fontSize="1xl" fontWeight={600}>
            <Link to="">FAST TRASH</Link>
          </Text>
        </Flex>
        <Flex gap="2rem" alignItems="center">
          <Text>
            <Link to="/login">Login</Link>
          </Text>
          <Button
            fontSize={10}
            fontWeight={600}
            lineHeight={24}
            color="#fff"
            backgroundColor="#7F56D9;
"
          >
            <Link to="/signup">Signup</Link>
          </Button>
        </Flex>
      </Flex>
    </nav>
  );
}

export default MainNAvigation;
