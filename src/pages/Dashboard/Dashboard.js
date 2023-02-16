import {  useParams } from "react-router-dom";
import History from "./history";

export default function Dashboard() {
  const params = useParams();
  <div>
    <h1>{params.profile}</h1>
  </div>;
}
