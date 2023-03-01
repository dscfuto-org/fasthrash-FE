import { redirect, json } from "react-router-dom";

export async function loader({ request, params }) {
  const token = localStorage.getItem("token");
  const searchParam = new URLSearchParams(window.location.search);
  const encodedData = searchParam.get("dashboard");
  const dashboardData = JSON.parse(decodeURIComponent(encodedData));
  console.log(token);
  if (!token) {
    return redirect("/login");
  }
  const response = await fetch(
    `https://fastrash-1337.ew.r.appspot.com/api/alerts/`
  );
  if (response.status !== 200 || !response.ok) {
    return json({ status: 500 }, { message: response.message });
  }
  const { data } = await response.json();

  return { data, dashboardData };
}
