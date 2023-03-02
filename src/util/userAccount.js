export const resetPassword = async (data) => {
  let url = "https://fastrash-1337.ew.r.appspot.com/api/auth/resetpassword";
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  };
  const response = await fetch(`${url}/`, fetchOptions);

  return response;
};
