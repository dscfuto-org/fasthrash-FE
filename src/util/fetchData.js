import setToken from "../Auth/getToken";

const getAndFetchData = async (method, id, body = {}) => {
  const token = setToken();
  let url;
  if (method === "GET") {
    url = `https://fastrash-1337.ew.r.appspot.com/api/org/alerts/${id}`;
  }
  if (method === "PUT") {
    url = `https://fastrash-1337.ew.r.appspot.com/api/org/alerts/update/${id}/`;
  }
  const response = await fetch(
    url,
    method === "PUT"
      ? {
          method: method,
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(body),
        }
      : {
          method: method,
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
  );
  const data = await response.json();
  return data;
};

export default getAndFetchData;
