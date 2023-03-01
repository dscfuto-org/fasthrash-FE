async function loginTime(url, data, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
    signal: timeout.signal,
  };

  const response = await fetch(url, fetchOptions);

  clearTimeout(timeoutId);
  return response;
}

export default loginTime;
