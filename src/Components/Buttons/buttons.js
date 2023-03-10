import { Button } from "@chakra-ui/react";

export default function Buttons(props) {
  return (
    <Button
      colorScheme="messenger"
      fontSize={"2xl"}
      p={"4"}
      width={"50%"}
      onClick={props.Click}
    >
      {props.text}
    </Button>
  );
}
