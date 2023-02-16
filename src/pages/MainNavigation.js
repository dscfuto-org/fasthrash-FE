import { Flex, Text, Button } from "@chakra-ui/react";
import { Link, useRouteLoaderData } from "react-router-dom";

function MainNAvigation() {
  const token = useRouteLoaderData("root");
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
          <Text as="div">
            {token && <Link to="/logout">Logout</Link>}
            {!token && <Link to="/login">Login</Link>}
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
