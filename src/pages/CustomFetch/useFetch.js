import { useEffect, useState } from "react";

export const useFetch = ({ url }) => {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        const err = await res.json();
        setIsError(true);
        setError(err);
        setIsLoading(false);
        return;
      }
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
      setError(err);
      setIsLoading(false);
    }
  };

  const refetch = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    data,
    isError,
    isLoading,
    error,
    refetch,
  };
};
