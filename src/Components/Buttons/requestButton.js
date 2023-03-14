import { Button } from "@chakra-ui/react";
import {  useDispatch } from "react-redux";
import { pending } from "../../store/alerts";
import { useEffect, useState } from "react";

export default function RequestButtons({ id }) {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();

  const Click = () => {
    dispatch(
      pending({
        id,
      })
    );
    setClicked(true);
  };
  useEffect(() => {

  },[clicked])
  return (
    <Button
      colorScheme={clicked ? "whatsapp" : "gray"}
      fontSize={"2xl"}
      p={"4"}
      width={"50%"}
      onClick={Click}
      id={id}
    >
      {clicked ? "Accept" : "Accepted"}
    </Button>
  );
}
