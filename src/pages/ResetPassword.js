import loginTime from "../util/login";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { SITE_NAME, useColors } from "../App";
import {
  redirect,
  useActionData,
  Form as form,
  useNavigation,
} from "react-router-dom";
const ResetPassword = () => {
  const [show, setValue] = useState(false);
  const togglePassword = (event) => setValue((prev) => !prev);
  const navigation = useNavigation();
  const isSubmiting = navigation.state === "submitting";
  const errors = useActionData();
  let message;
  if (errors?.password) {
    message = errors?.password;
  }
  if (!errors?.password && errors?.passwordConfirm)
    message = errors?.passwordConfirm;

  if (errors?.status) message = errors.message;

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexFlow="column"
      width={{ base: "90%", md: "40%" }}
      height="auto"
      mt="50px"
    >
      <Text fontWeight={700} fontSize={{ base: "", md: "", lg: "35px" }} mb={5}>
        Reset Password
      </Text>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexFlow="column"
        border="1px solid #eee"
        width="100%"
        height="100%"
        borderRadius="md"
        p={5}
      >
        {message && (
          <Text
            mt={5}
            bg="crimson"
            color="#fff"
            fontWeight={600}
            textAlign="center"
            borderRadius="md"
            p={2}
          >
            {message}
          </Text>
        )}
        <FormControl marginY="30px" as={form} method="post">
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

          <FormLabel mt={"30px"}>Confirm your new Password</FormLabel>
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
            mt="40px"
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
        &copy; {new Date().getFullYear()} {""} {SITE_NAME}
      </Box>
    </Box>
  );
};

export default ResetPassword;

export async function action({ request, params }) {
  const id = params.Id;
  const token = params.token;
  const tokenID = params.tokenID;
  const formData = await request.formData();
  const data = {
    confirmPassword: formData.get("ConfirmPassword").trim(),
    password: formData.get("password").trim(),
  };

  const errors = {};

  if (!data.password) {
    errors.password = "New password is Required";
  }
  if (data.confirmPassword !== data.password) {
    errors.passwordConfirm = "Password  is different from Confirm password";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }
  const response = await loginTime(
    `https://fastrash-1337.ew.r.appspot.com/api/auth/org/resetpassword/${id}/${token}/${tokenID}`,
    { password: data.password }
  );
  console.log(response);
  if (response.status === 401 || response.status === 404 || !response.ok) {
    return { message: "invalid", status: response.status };
  }
  console.log(response.ok);
  return redirect("/login");
}
