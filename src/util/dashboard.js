import { redirect, json } from "react-router-dom";

export async function loader({ request, params }) {
  const token = localStorage.getItem("token");
  const id = params.profile;
  if (!token) {
    return redirect("/login");
  }
  const response = await fetch(
    `https://fastrash-1337.ew.r.appspot.com/api/auth/org/profile/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  if (response.status !== 200 || !response.ok) {
    return json({ status: 500 }, { message: response.message });
  }
  const { data } = await response.json();
  console.log(data);
  return data;
}
