import { useEffect, useState } from "react";

export const useFetch = (url, options = {}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(url);
        const fetchData = await res.json();
        setData(fetchData);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [url]);
  return { isLoading, error, data };
};
