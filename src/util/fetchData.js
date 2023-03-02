const getAndFetchData = async (method, id, body = {}) => {
  let url = `https://fastrash-1337.ew.r.appspot.com/api/alerts/`;
  if (method === "GET") {
    url = `https://fastrash-1337.ew.r.appspot.com/api/alerts/${id}`;
  }
  if (method === "PUT") {
    url = `https://fastrash-1337.ew.r.appspot.com/api/alerts/update/${id}/`;
  }
  const response = await fetch(
    url,
    method === "PUT"
      ? {
          method: method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      : {}
  );
  const data = await response.json();
  return data;
};

export default getAndFetchData;
