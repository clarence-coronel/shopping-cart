import { useState, useEffect } from "react";

const useData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }

    useEffect(() => {
      fetchData();
    }, []);

    return { data, loading, error };
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useData;
