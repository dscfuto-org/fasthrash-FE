async function loginTime(url, data, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(url, fetchOptions);

  clearTimeout(timeoutId);
  return response;
}

export default loginTime;
