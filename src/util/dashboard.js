import { redirect } from "react-router-dom";

export async function loader({ request, params }) {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/login");
  }

  return null;
}
