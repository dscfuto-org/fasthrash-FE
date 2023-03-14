// import { redirect } from "react-router-dom";
export default function setToken() {
  const token = localStorage.getItem("token");
  return token;
}

export function checkToken() {
  return setToken();
}

// export function protectedRoute() {
//   const token = setToken();
//   if (!token) {
//     return redirect("/login");
//   }
// }
