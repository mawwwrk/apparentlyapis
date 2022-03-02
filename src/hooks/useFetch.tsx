/* import { useEffect, useState } from "react";

export default function useFetch<T>(url: string, headers: Headers) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        headers,
      });
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
  };
}
 */

