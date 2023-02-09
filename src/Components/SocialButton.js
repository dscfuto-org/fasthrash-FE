import {  Button  } from "@chakra-ui/react";
import { GoogleIcon } from "./Icons";

export default function SocialButton (props) {
  return (
    <Button
        fontSize={16}
        fontWeight={600}
        lineHeight={24}
        width = {360}
        color="#344054"
        backgroundColor= "white"
        border = "1px solid"
        
    > 
    <GoogleIcon mr = '10px' /> Sign up with {props.name}
    </Button>
  );
}
