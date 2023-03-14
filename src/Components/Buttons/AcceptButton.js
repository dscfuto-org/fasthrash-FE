import { Button, Spinner } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { completed, Accepted, updateState } from "../../store/alerts";
import { useState } from "react";
import getAndFetchData from "../../util/fetchData";

export default function Buttons({ id, name, color }) {
  const dispatch = useDispatch();

  const [spin, setSpin] = useState(false);
  const { items } = useSelector((state) => state.alert);
  const handleClick = async () => {
    setSpin(true);
    if (name === "collected") {
      setSpin(false);
      return;
    }

    try {
      if (name === "pending") {
        const data = await getAndFetchData("GET", id);
        const status = data.data.alert.status;
        if (status === "pending") {
          const res = await getAndFetchData("PUT", id, { status: "accepted" });
          console.log(res);
          setSpin(false);
          dispatch(Accepted({ id: id }));
          console.log(items);
        }
        if (data !== "pending") {
          updateState({ id: id, status: data });
          setSpin(false);
        }
      }
      if (name === "accepted") {
        const data = await getAndFetchData("GET", id);
        const status = data.data.alert.status;
        if (status === "accepted") {
          const res = await getAndFetchData("PUT", id, { status: "collected" });
          console.log(res);
          setSpin(false);
          dispatch(completed({ id: id }));
        }
        if (data !== "accepted") {
          updateState({ id: id, status: data });
          setSpin(false);
        }
      }
    } catch (error) {}
  };
  return (
    <Button onClick={handleClick} bg={color}>
      {!spin && name.charAt(0).toUpperCase() + name.slice(1)}
      {spin && <Spinner size="sm" />}
    </Button>
  );
}
