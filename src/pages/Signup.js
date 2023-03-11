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
  Link,
  InputGroup,
  InputRightElement,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

import { useState } from "react";
import { useColors } from "../App";
import {
  Form as forms,
  useActionData,
  redirect,
  useNavigation,
} from "react-router-dom";
import LoginTime from "../util/login";
import User1 from '../assets/images/user1.jpg'
import User2 from '../assets/images/user2.jpg'
import User3 from '../assets/images/user3.jpg'
import User4 from '../assets/images/user4.jpg'
import User5 from '../assets/images/user5.jpg'
import User6 from '../assets/images/user6.jpg'
import User7 from '../assets/images/user7.jpg'

export default function Signup() {
  const [show, setValue] = useState(false);
  const togglePassword = (event) => setValue(!show);
  const errors = useActionData();
  const navigation = useNavigation();
  const isSubmiting = navigation.state === "submitting";

  let checkIfErrorDataExist = function(type){
    if(!Boolean(errors)){
      return false;
    }

    if(Object.keys(errors).length > 0){
        if(errors.hasOwnProperty(type)){
           return true;
        }else{
          return false;
        }
    }
  }



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
      height="100vh"
    >
      <Box pt={'40px'} width={{ lg: "30%", sm: "80%" }} margin="auto">
        <Heading size="lg">Sign Up!</Heading>

        <Box marginTop="40px" as={forms} method="post">
          <Text marginTop="10px" color="red">
            {errors?.status ? errors.message : ""}
          </Text>
          <FormControl marginY="16px">
            <FormLabel>Business Name*</FormLabel>
            <Input type="text" name="name" placeholder="Enter your Name" />
            <Text marginTop="10px" color="red">
              {checkIfErrorDataExist("name") ? errors.name: ""}
            </Text>
          </FormControl>

          <FormControl marginY="16px">
            <FormLabel>Email address</FormLabel>
            <Input type="email" name="email" placeholder="Enter your email" />
            <Text marginTop="10px" color="red">

              {checkIfErrorDataExist("email") ? errors.email: ""}

            </Text>
          </FormControl>
          <FormControl marginY="16px">
            <FormLabel>Location</FormLabel>
            <Input type="text" name="location" placeholder="Address" />
            <Text marginTop="10px" color="red">
              {checkIfErrorDataExist("location") ? errors.location: ""}
            </Text>
          </FormControl>
          <FormControl>
            <FormLabel>Years of Operation</FormLabel>
            <NumberInput
              name="years"
              step={1}
              defaultValue={1}
              min={2}
              max={20}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Text marginTop="10px" color="red">

              {checkIfErrorDataExist("years") ? errors.years: ""}

            </Text>
          </FormControl>

          <FormControl marginY="16px">
            <FormLabel>Company Size</FormLabel>
            <RadioGroup defaultValue="1" name="size">
              <Stack spacing={4} direction="row">
                <Radio size="md" value="small" colorScheme="blue">
                  Small
                </Radio>
                <Radio size="md" value="Medium" colorScheme="yellow">
                  Medium
                </Radio>
                <Radio size="md" value="Large" colorScheme="orange">
                  Large
                </Radio>
              </Stack>
            </RadioGroup>

            <Text marginTop="10px" color="red">

              {checkIfErrorDataExist("size") ? errors.size: ""}

            </Text>
          </FormControl>

          <FormControl marginY="30px">
            <FormLabel>Password</FormLabel>
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

            <Text marginTop="10px" color="red">

              {checkIfErrorDataExist("password") ? errors.password: ""}

            </Text>
          </FormControl>

          <FormControl marginY="30px">
            <FormLabel>Password Confirmation</FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Confirm password"
                name="passwordConfirm"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={togglePassword}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>

            <Text marginTop="10px" color="red">
              {checkIfErrorDataExist("passwordConfirm")
                ? errors.passwordConfirm
                : ""}
            </Text>
          </FormControl>

          <Button
            bgColor={useColors.appGreen}
            color="white"
            width="100%"
            fontWeight="bold"
            marginY="20px"
            type="submit"
            disabled={isSubmiting}
          >
            {isSubmiting ? "Loading..." : "Get started"}
          </Button>

          <Text mt="10px" mb='30px' textAlign="center">
            Already have an account?{" "}
            <Link
              href="/login"
              marginLeft="16px"
              color="#7F56D9"
              fontWeight="bold"
            >
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
        style={{
          color: "white",
          flexDirection: "column",
          alignContent: "center",
        }}
        // padding="50px 10px"
        height="920px"
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
              Sign Up and Reward users While you Recycle!
            </Heading>

            <Text>
              Create a free account and get full access to all Collectors with
              Trash Available to Dispose.
            </Text>

            <Flex
              gap="10px"
              alignItems="center"
              justifyContent="flex-start"
              width="100%"
            >
              <AvatarGroup size="md" max={7}>
                <Avatar name="Alex Unusual" src={User1} />
                <Avatar name="Chidera" src={User2} />
                <Avatar name="Victor Okonkwo" src={User3} />
                <Avatar name="Localhost" src={User4} />
                <Avatar name="Christian Nwamba" src={User5} />
                <Avatar name="Victory George" src={User4} />
                <Avatar name="Sunday Ezekiel" src={User5} />
                <Avatar name="Israel Godfrey" src={User6} />
                <Avatar name="Emeka Lamb" src={User7} />
                <Avatar name="Christian Nwamba" src={User5} />
                <Avatar name="Victory George" src={User4} />
                <Avatar name="Sunday Ezekiel" src={User5} />
                <Avatar name="Israel Godfrey" src={User6} />
                <Avatar name="Emeka Lamb" src={User7} />
                <Avatar name="Christian Nwamba" src={User5} />
                <Avatar name="Victory George" src={User4} />
                <Avatar name="Sunday Ezekiel" src={User5} />
                <Avatar name="Israel Godfrey" src={User6} />
                <Avatar name="Emeka Lamb" src={User7} />
              </AvatarGroup>

              <Text>Join 40,000+ users.</Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export async function action({ request }) {
  console.log(request);
  const formData = await request.formData();
  const errors = {};
  

  const data = {
    businessName: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    passwordConfirm: formData.get("passwordConfirm"),
    size: formData.get("size"),
    yearsOfOperation: Number(formData.get("years")),
    location: formData.get("location"),
  };

  if (!data.businessName) {
    errors.name = "Name is required";
  }
  if (!data.email) {
    errors.email = "Email is required";
  }
  if (!data.password) {
    errors.password = "Password is required";
  }


  if (!data.passwordConfirm) {
    errors.passwordConfirm = "Password Confirmation is required";
  }
  if (data.passwordConfirm !== data.password) {
    errors.passwordConfirm = "Password  is different from Confirm password";
  }

  if (!data.size) {
    errors.size = "Company size is required";
  }
  if (!data.yearsOfOperation) {
    errors.years = "Years of operation is required";
  }
  if (!data.location) {
    errors.location = "Location is required";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const response = await LoginTime(
    "https://fastrash-1337.ew.r.appspot.com/api/auth/org/register",
    data
  );

  if (response.status === 500 || response.status === 401) {
    return {
      status: 500,
      message: "Internal Server Error",
    };
  }
  return redirect("/login");
}
