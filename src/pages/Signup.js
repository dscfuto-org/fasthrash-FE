import {
  Box,
  Flex,
  Heading,
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
import { checkIfErrorDataExist } from "../util/checkErrors";
export default function Signup() {
  const [show, setValue] = useState(false);
  const togglePassword = (event) => setValue(!show);
  const errors = useActionData();
  const navigation = useNavigation();
  const isSubmiting = navigation.state === "submitting";
  const clear = () => {
    let text = document.querySelectorAll("p");
    let texts = [...text].slice(0, text.length - 1);
    texts.forEach((p) => {
      p.innerText = "";
    });
    return;
  };
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
      <Box pt={"4px"} width={{ lg: "30%", sm: "80%" }} margin="auto">
        <Heading size="lg">Sign Up!</Heading>

        <Box marginTop="40px" as={forms} method="post" onFocus={clear}>
          <Text marginTop="10px" color="red">
            {errors?.status ? errors.message : ""}
          </Text>
          <FormControl marginY="16px">
            <FormLabel>Business Name</FormLabel>
            <Input type="text" name="name" placeholder="Enter your Name" />
            <Text marginTop="10px" color="red">
              {checkIfErrorDataExist("name", errors) ? errors.name : ""}
            </Text>
          </FormControl>

          <FormControl marginY="16px">
            <FormLabel>Email address</FormLabel>
            <Input type="email" name="email" placeholder="Enter your email" />
            <Text marginTop="10px" color="red">
              {checkIfErrorDataExist("email", errors) ? errors.email : ""}
            </Text>
          </FormControl>
          <FormControl marginY="16px">
            <FormLabel>Location</FormLabel>
            <Input type="text" name="location" placeholder="Address" />
            <Text marginTop="10px" color="red">
              {checkIfErrorDataExist("location", errors) ? errors.location : ""}
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
              {checkIfErrorDataExist("years", errors) ? errors.years : ""}
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
              {checkIfErrorDataExist("size", errors) ? errors.size : ""}
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
              {checkIfErrorDataExist("password", errors) ? errors.password : ""}
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
              {checkIfErrorDataExist("passwordConfirm", errors)
                ? errors.passwordConfirm
                : ""}
            </Text>
          </FormControl>

          <Button
            bgColor={useColors.appGreen}
            color="white"
            width="100%"
            fontWeight="bold"
            marginY="8px"
            type="submit"
            disabled={isSubmiting}
          >
            {isSubmiting ? "Loading..." : "Get started"}
          </Button>

          <Text mt="10px" mb="30px" textAlign="center">
            Already have an account?{" "}
            <Link
              href="/login"
              marginLeft="16px"
              color={useColors.appGreen}
              fontWeight="bold"
            >
              Login
            </Link>
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}

export async function action({ request }) {
  console.log(request);
  const formData = await request.formData();
  const errors = {};
  const {
    name: businessName,
    email,
    password,
    passwordConfirm,
    size,
    years: yearsOfOperation,
    location,
  } = Object.fromEntries(formData.entries());
  const data = {
    businessName,
    email,
    password,
    passwordConfirm,
    size,
    yearsOfOperation,
    location,
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
  if (data.password.length < 8) {
    errors.password = "Password should be at least 8 characters long";
  }
  if (!/(?=.*[a-z])(?=.*[A-Z])/.test(data.password)) {
    errors.password =
      "Password should contain at least one uppercase and one lowercase character";
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
