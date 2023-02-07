import { Outlet } from "react-router-dom";

function Rootlayout() {
  return (
    <div>
      <h1>Welcome to fast trash</h1>
      <main>{<Outlet/>}</main>
    </div>
  );
}

export default Rootlayout;
