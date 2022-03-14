import { useEffect, useRef, useState } from "react";
import { RefCache, ApiResponseType } from "../utils/datatypes";

export default function useFetch(url: keyof RefCache) {
  const [data, setData] = useState<ApiResponseType>();
  const [status, setStatus] = useState("idle");
  const cache = useRef<RefCache>({});
  useEffect(() => {
    let isActive = true;
    const fetchData = async () => {
      setStatus("pending");
      try {
        if (cache.current && url in cache.current) {
          if (isActive) {
            setData(cache.current[url]);
            setStatus("resolved");
          }
        } else {
          const response = await fetch(url as string, {
            referrer: "developer.marvel.com",
            method: "GET",
          });
          const responseBody = await response.json();
          cache.current[url] = responseBody;
          if (isActive) {
            setData(responseBody);
            setStatus("fetched");
          }
        }
      } catch (error) {
        console.log(error);
        if (isActive) setStatus("rejected");
      }
    };
    fetchData();
    return () => {
      isActive = false;
    };
  }, [url]);
  return { data, status };
}
