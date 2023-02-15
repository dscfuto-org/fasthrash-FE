import {
  Box,
  Flex,
  Heading,
  Avatar,
  AvatarGroup,
  Text,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Link,
  InputGroup,
  InputRightElement,
  Button
} from "@chakra-ui/react";
import { useState } from "react";

export default function Signup() {
  const [show, setValue] = useState(false);

  const togglePassword = (event) => setValue(!show);

  return (
    <Flex
      width="100%"
      justify="between"
      direction={{
        sm: "column",
        base: "row",
        md: "column",
        lg: "row",
        xl: "row",
      }}
      height="80vh"
    >

      <Box width={{ lg: "30%", sm: "80%" }} margin="auto">
        <Heading size="lg">Signup</Heading>
        <Text marginTop="10px">Welcome. Please enter your details to continue.</Text>

        <Box marginTop="40px">
          <FormControl marginY="16px">
            <FormLabel>Name*</FormLabel>
            <Input type="text" placeholder="Enter your Name" />
          </FormControl>


          <FormControl marginY="16px">
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="Enter your email"/>
          </FormControl>

          <FormControl marginY="30px">
            <FormLabel>Password</FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={togglePassword}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Checkbox defaultChecked fontWeight="400">
            I agree to the <Link>terms and conditions</Link> of using FastTrash
          </Checkbox>

          <Button
            bgColor="#7F56D9"
            color="white"
            width="100%"
            fontWeight="bold"
            marginY="20px"
          >
            Get Started
          </Button>

          <Button
            marginTop="10px"
            width="100%"
            leftIcon={<img src="/assets/google.svg" alt="icon" />}
          >
            Sign In With Google
          </Button>

          <Text marginTop="30px" textAlign="center">
            Already have an account ?{" "}
            <Link href="/login" marginLeft="16px" color="#7F56D9" fontWeight="bold">
              Login
            </Link>
          </Text>
        </Box>
      </Box>


      <Box
        display={{
          sm: "none",
          base: "none",
          md: "none",
          lg: "flex",
          xl: "flex",
        }}
        width="50%"
        background="linear-gradient(45deg, #101828 0%, #475467 100%)"
        style={{color: "white", flexDirection:"column", alignContent: "center"}}
        // padding="50px 10px"
        height="100%"
      >
        <Box width="80%" margin="auto">
          <Flex
            alignItems="center"
            justifyContent="center"
            gap="30px"
            direction="column"
            marginBottom="60px"
          >
            <Heading size="xl">
              Start turning your ideas to reality.
            </Heading>

            <Text>Create a free account and get full access to all features for 30-days. No credit card needed. Get started in 2 minutes.</Text>


            <Flex gap="10px" alignItems="center" justifyContent="flex-start" width="100%">
              <AvatarGroup size='md' max={6}>
                <Avatar name='Alex Unusual' src='/assets/Profile1.jpg' />
                <Avatar name='Chidera' src='/assets/Profile1.jpg' />
                <Avatar name='Victor Okonkwo' src='/assets/Profile1.jpg' />
                <Avatar name='Localhost' src='/assets/Profile1.jpg' />
                <Avatar name='Christian Nwamba' src='/assets/Profile1.jpg' />
              </AvatarGroup>   
              
              <Text>Join 40,000+ users.</Text>           
            </Flex>



            
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
