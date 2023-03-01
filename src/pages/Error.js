import ErrorPage from "./ErrorPage";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const Title = error?.status !== 404 ? error?.status : "Network Error";
  const message = error?.message
    ? error.message
    : "An error occurred while loading the page";
  return <ErrorPage message={message} title={Title} />;
};

export default Error;
