import {
  Box,
  Flex,
  Heading,
  Stack,
  Avatar,
  AvatarBadge,
  Text,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Link,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useColors } from "../App";
import { useState } from "react";
import { redirect, Form as form, json } from "react-router-dom";
import { useActionData, useNavigation } from "react-router-dom";
import loginTime from "../util/login";
import { resetPassword } from "../util/userAccount";

export default function Login() {
  const [show, setValue] = useState(false);
  const togglePassword = (event) => setValue(!show);
  const errors = useActionData();
  const navigation = useNavigation();
  const isSubmiting = navigation.state === "submitting";
  let message;
  if (errors?.email && !errors?.password) {
    message = errors?.email;
  }
  if (!errors?.email && errors?.password) {
    message = errors?.password;
  }
  if (errors?.email && errors?.password) {
    message = "Please fill in your details!";
  }
  if (errors?.status && !errors?.email && !errors?.password) {
    message = "Invalid email or password!";
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
      <Box
        display={{
          sm: "none",
          base: "none",
          md: "none",
          lg: "block",
          xl: "block",
        }}
        width="50%"
        bgColor="#F9FAFB"
        padding="50px"
        height="100%"
      >
        <Box display='flex' alignItems='center' justifyContent='center' width="100%" height='100%' margin="auto">
          <Flex
            align="center"
            justify="center"
            gap="16px"
            direction="column"
            marginBottom="60px"
          >
            <Heading size="md" align="center">
              LOGIN TO YOUR ACCOUNT
            </Heading>

            <Stack direction="row" spacing={4}>
              <Avatar src="/assets/Profile1.jpg" size="lg">
                <AvatarBadge boxSize="1em" bg="green.500" />
              </Avatar>
            </Stack>

            <Text as="b">Kelly Williams</Text>
            <Text>Head Of Design, Layers.</Text>
          </Flex>
        </Box>
      </Box>

      <Box width={{ lg: "30%", sm: "80%" }} margin="auto">
        <Heading size="lg">Welcome Back!</Heading>
        {message && <Text mt={5} bg='crimson' color='#fff' fontWeight={600} textAlign='center' borderRadius='md' p={2}>{message}</Text>}

        <Box marginTop="40px" as={form} method="post">
          <FormControl marginY="16px">
            <FormLabel> Email address</FormLabel>
            <Input type="email" name="email" />
          </FormControl>

          <FormControl marginY="30px">
            <Box display="flex" justify="between" width="100%">
              <FormLabel> Password</FormLabel>
              <Link onClick={handleForgetPass} href="" marginLeft="auto">
                Forgot Password?
              </Link>
            </Box>

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

          <Checkbox defaultChecked fontWeight="400">
            Remember Me
          </Checkbox>

          <Button
            bgColor={useColors.appGreen}
            color="white"
            width="100%"
            fontWeight="bold"
            marginY="20px"
            type="submit"
            disable={isSubmiting.toString()}
          >
            {isSubmiting ? "Loading..." : "Login"}
          </Button>
          <Text marginTop="30px" fontWeight="bold" display='flex' justifyContent='space-between'>
            Don't Have an account?{" "}
            <Link href="/signup" marginLeft="16px" color="#7F56D9">
              Sign Up!
            </Link>
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}

const handleForgetPass = async (e) => {
  e.preventDefault();
  let userEmail = document.querySelector("[type=email]").value;
  let response = null;

  if (
    (userEmail && userEmail.length < 0) ||
    !userEmail ||
    !userEmail.includes("@")
  ) {
    return alert("Please proide a valid email id");
  }

  if (userEmail && userEmail.length > 0) {
    await resetPassword(userEmail);
  }
};

export async function action({ request }) {
  const formData = await request.formData();
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const errors = {};

  if (!data.email) {
    errors.email = "Email is required!";
  }
  if (!data.password) {
    errors.password = "Password is required!";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }
  const response = await loginTime(
    "https://fastrash-1337.ew.r.appspot.com/api/auth/org/login",
    data
  );
  if (response.status === 401 || response.status === 404) {
    return { message: "Invalid email or password", status: response.status };
  }
  if (!response.ok) {
    return json({ message: response.message }, { status: response.status });
  }

  const { token, id } = await response.json();

  localStorage.setItem("token", token);

  return redirect(`/dashboard/${id}`);
}
