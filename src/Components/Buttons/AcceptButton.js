import { Button, Spinner } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { completed, Accepted } from "../../store/alerts";
import { useState } from "react";
import getAndFetchData from "../../util/fetchData";
import { useParams } from "react-router-dom";

export default function Buttons({ id, name, color }) {
  const dispatch = useDispatch();
  const { profile } = useParams();
  const [spin, setSpin] = useState(false);
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

        if (status === name) {
          await getAndFetchData("PUT", id, {
            status: "accepted",
            collectorId: profile,
          });
        }
        dispatch(Accepted({ id: id }));
        setSpin(false);
        return;
      }
      if (name === "accepted") {
        const data = await getAndFetchData("GET", id);
        let status = data.data.alert.status;
        if (status !== name && status === "collected") {
          setSpin(false);
          dispatch(completed({ id: id }));
        }
        setSpin(false);
        return;
      }
    } catch (error) {
      console.log(error);
      setSpin(false);
    }
  };
  return (
    <Button onClick={handleClick} bg={color}>
      {!spin && name.charAt(0).toUpperCase() + name.slice(1)}
      {spin && <Spinner size="sm" />}
    </Button>
  );
}
