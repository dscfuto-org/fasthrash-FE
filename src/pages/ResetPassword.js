import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigation } from 'react-router-dom';
import { SITE_NAME, useColors } from '../App';

const ResetPassword = () => {
    const [show, setValue] = useState(false);
    const togglePassword = (event) => setValue(!show);
    const navigation = useNavigation();
    const isSubmiting = navigation.state === "submitting";

    return (
        <Box display='flex' alignItems='center' justifyContent='center' flexFlow='column' width={{ base: '90%', md: '40%' }} height='auto' mt='50px'>
            <Text fontWeight={700} fontSize={{ base: '', md: '', lg: '35px' }} mb={5}>Reset Password</Text>
            <Box display='flex' alignItems='center' justifyContent='center' flexFlow='column' border='1px solid #eee' width='100%' height='100%' borderRadius='md' p={5}>
                <FormControl marginY="30px">
                    <FormLabel>Enter your new Password</FormLabel>
                    <InputGroup size="md">
                        <Input
                            pr="4.5rem"
                            type={show ? "text" : "password"}
                            placeholder="Enter password"
                            name="password"
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={togglePassword}>
                                {show ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                    <FormLabel mt={'30px'}>Confirm your new Password</FormLabel>
                    <InputGroup size="md">
                        <Input
                            pr="4.5rem"
                            type={show ? "text" : "password"}
                            placeholder="Confirm password"
                            name="ConfirmPassword"
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={togglePassword}>
                                {show ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Button
                        bgColor={useColors.appGreen}
                        color="white"
                        width="100%"
                        fontWeight="bold"
                        type="submit"
                        mt='40px'
                        disable={isSubmiting.toString()}
                    >
                        {isSubmiting ? "Processing..." : "Reset Password!"}
                    </Button>
                </FormControl>
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
    )
}

export default ResetPassword