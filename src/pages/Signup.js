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
import {
  Form as forms,
  useActionData,
  redirect,
  useNavigation,
} from "react-router-dom";
import LoginTime from "../util/login";

export default function Signup() {
  const [show, setValue] = useState(false);
  const togglePassword = (event) => setValue(!show);
  const errors = useActionData();
  const navigation = useNavigation();
  const isSubmiting = navigation.state === "submitting";

  let message;
  if (errors) {
    Object.keys(errors).forEach((errorType) => {
      switch (errorType) {
        case "email":
          message = errors.email;
          break;
        case "password":
          message = errors.password;
          break;
        case "status":
          message = errors.message;
          break;
        case "location":
          message = errors.location;
          break;
        case "name":
          message = errors.name;
          break;
        case "years":
          message = errors.years;
          break;
        case "size":
          message = errors.size;
          break;
        default:
          break;
      }
      if (message) {
        return;
      }
    });
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
      height="80vh"
    >
      <Box width={{ lg: "30%", sm: "80%" }} margin="auto">
        <Heading size="lg">Signup</Heading>
        <Text marginTop="10px" color="red">
          {errors && message}
        </Text>

        <Box marginTop="40px" as={forms} method="post">
          <FormControl marginY="16px">
            <FormLabel>Business Name*</FormLabel>
            <Input type="text" name="name" placeholder="Enter your Name" />
          </FormControl>

          <FormControl marginY="16px">
            <FormLabel>Email address</FormLabel>
            <Input type="email" name="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl marginY="16px">
            <FormLabel>Location</FormLabel>
            <Input type="text" name="location" placeholder="Address" />
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
          </FormControl>

          <Button
            bgColor="#7F56D9"
            color="white"
            width="100%"
            fontWeight="bold"
            marginY="20px"
            type="submit"
            disabled={isSubmiting}
          >
            {isSubmiting ? "Loading..." : "Get started"}
          </Button>

          <Text marginTop="30px" textAlign="center">
            Already have an account ?{" "}
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
              Sign Up and Reward users Why you Recycle
            </Heading>

            <Text>
              Create a free account and get full access to all Collectors with
              Trash Available to Dispose
            </Text>

            <Flex
              gap="10px"
              alignItems="center"
              justifyContent="flex-start"
              width="100%"
            >
              <AvatarGroup size="md" max={6}>
                <Avatar name="Alex Unusual" src="/assets/Profile1.jpg" />
                <Avatar name="Chidera" src="/assets/Profile1.jpg" />
                <Avatar name="Victor Okonkwo" src="/assets/Profile1.jpg" />
                <Avatar name="Localhost" src="/assets/Profile1.jpg" />
                <Avatar name="Christian Nwamba" src="/assets/Profile1.jpg" />
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
  const formData = await request.formData();

  const data = {
    businessName: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    size: formData.get("size"),
    yearsOfOperation: Number(formData.get("years")),
    location: formData.get("location"),
  };
  let errors = {};
  if (!data.businessName) {
    errors.name = "Name is required";
  }
  if (!data.email) {
    errors.email = "Email is required";
  }
  if (!data.password) {
    errors.password = "Password is required";
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