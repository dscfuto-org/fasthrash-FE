import { Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { completed } from "../../store/alerts";
import { useEffect, useState } from "react";

export default function AcceptButtons({ id }) {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();

  const Click = () => {
    dispatch(
      completed({
        id,
      })
    );
    setClicked(true);
  };
  useEffect(() => {}, [clicked]);
  return (
    <Button
      colorScheme={clicked ? "red" : "gray"}
      fontSize={"2xl"}
      p={"4"}
      width={"50%"}
      onClick={Click}
      id={id}
    >
      Completed
    </Button>
  );
}
