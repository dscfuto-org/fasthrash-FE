import { redirect } from "react-router-dom";

export function logout() {
  localStorage.clear("token");
  return redirect("/");
}
