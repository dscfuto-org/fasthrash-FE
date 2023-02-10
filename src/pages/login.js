import Buttons from "../Components/buttons";
import { Box, Flex, Heading, Stack, Avatar, AvatarBadge, Text, FormControl, FormLabel, Input, Switch, Checkbox, Link, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { useState } from "react";

export default function Login() {

  const [show, setValue] = useState(false)
      
  const togglePassword = (event) => setValue(!show)
    

  return (
    <Flex width="100%" justify="between" direction={{sm: "column", base: "row", md: "column", lg: "row", xl: "row"}} height="80vh">
      <Box  display={{sm: "none", base: "none", md: "none", lg: "block", xl: "block"}} width="50%" bgColor="#F9FAFB" padding="50px" height="100%">
        <Box width="80%" margin="auto">
          <Flex align="center" justify="center" gap="16px" direction="column" marginBottom="60px">
            <Heading size="md" align="center">We've been using Untitled to kick start every new project and can't imagine working without it.</Heading>

            <Stack direction='row' spacing={4}>
              <Avatar src="/assets/Profile1.jpg" size="lg">
                <AvatarBadge boxSize='1em' bg='green.500' />
              </Avatar>
            </Stack>

            <Text as="b">Kelly Williams</Text>
            <Text>Head Of Design, Layers.</Text>
          </Flex>
        </Box>        
      </Box>


      <Box width={{lg: "30%", sm: "80%"}} margin="auto">
        <Heading size="lg">Welcome Back</Heading>
        <Text marginTop="10px">Welcome. Please enter your details.</Text>

        <Box marginTop="40px">
          <FormControl marginY="16px">
              <FormLabel>Email address</FormLabel>
              <Input type='email' />
          </FormControl>

          <FormControl marginY="30px">
              <Box display="flex" justify="between" width="100%">
                  <FormLabel>Password</FormLabel>
                  <Link href="" marginLeft="auto">Forgot Password?</Link>
              </Box>
            

              <InputGroup size='md'>
                <Input
                  pr='4.5rem'
                  type={show ? 'text' : 'password'}
                  placeholder='Enter password'
                />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={togglePassword}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
          </FormControl>


          <Checkbox defaultChecked fontWeight="400">Remember Me</Checkbox>            


          <Button bgColor="#7F56D9" color="white" width="100%" fontWeight="bold" marginY="20px">Login</Button>

          <Button marginTop="10px" width="100%" leftIcon={<img src="/assets/google.svg" />}>Sign In With Google</Button>

          <Text marginTop="30px" fontWeight="bold">Don't Have an account? <Link href="/signup" marginLeft="16px" color="#7F56D9">Sign Up</Link></Text>
          
        </Box>
      </Box>
    </Flex>
    
  );
}

export function loader() {}
