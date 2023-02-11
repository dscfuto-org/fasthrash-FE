import { Box, FormControl, Heading, FormLabel, FormHelperText, Input, Text, Flex, Icon} from '@chakra-ui/react'
import { EmailIcon, StarIcon} from '@chakra-ui/icons'
import {Form} from "react-router-dom"
import classes from "../CssStyle/SignUp.module.css"
export default function Signup() {
  return (
    <Box 
    display={'Flex'}
    width={'50%'}
    border={'1px solid #000000'}
    height={'70vh'}
    >
    <Form className={classes.box}>
      <Heading>Sign Up</Heading>
        <FormControl>
          <FormLabel>Name*</FormLabel>
            <Input type='text' placeholder='Enter your name'/>
          <FormLabel>Email*</FormLabel>
            <Input type='email' placeholder='Enter your email'/>
          <FormLabel>Password</FormLabel>
            <Input type='password' placeholder='Center your password'/>
            <Box>
            <FormHelperText>Must be at least 8 characters</FormHelperText>
            </Box>
            <Box 
            backgroundColor={'#7F56D9'}            >
            <Input type='password'/>
            </Box>
            <Box>
            <Input type='password'/>
            </Box>
            <FormHelperText>Already have an account? Log in</FormHelperText>
            <Flex
            marginTop={'60px'} 
            justifyContent={'space-between'}
            alignItems={'center'}
            >
              <Box>
                <Text>&copy;Untitled UI 2077</Text>
              </Box>
              <Box>
                <Text>
                  <EmailIcon/>
                  help@untitledui.com</Text>
              </Box>
            </Flex>
        </FormControl>
    </Form>
        <Box
        width={'50%'}
        padding={'0px 40px'}
        bgGradient='linear(45deg, #101828 0%, #475467 100%)' 
        >
        <Icon as={StarIcon} w={10} h={10} color='gold' />
          <Text
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          marginTop={'50%'}
          fontSize={'50px'}
          color={'#ffffff'}
          lineHeight={'1.1'}
          >Start turning your ideas into reality</Text>
          <Text
          fontSize={'15px'}
          color={'#ffffff'}
          >Create a free account and get access to all the free features for 30days.
            No credit card needed.Start in 2 minutes. </Text>
        </Box>
    </Box>
  );
}
