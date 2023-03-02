import { useState, useEffect } from "react";

export default function History({ id }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const getHistory = async () => {
      const response = await fetch(
        "https://fastrash-1337.ew.r.appspot.com/api/history/" + id
      );
      const data = await response.json();
      setHistory(data);
    };

    getHistory();
  }, [id]);

  return <>{history ? history : '' /* if history is null map data */}</>;
}
