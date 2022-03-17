import { useEffect, useReducer, useRef, useState } from "react";
import { appendQuery } from "../utils/helpers";
import { MarvelResponse } from "../utils/types";

export default function useMarvelAPI(url, page) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [results, setResults] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const controller = new AbortController();
  const { signal } = controller;
  const limit = useRef(50);
  const query = {
    limit: limit.current,
    offset: limit.current * page,
  };
  const fetchOptions = {
    signal: signal,
    headers: new Headers({
      referer: "developer.marvel.com/",
    }),
  };

  useEffect(() => {
    if (page === 1) setResults([]);
    const _url = appendQuery(url, query);
    const doFetch = async () => {
      try {
        const response = await fetch(_url, fetchOptions);
        if (response.status !== 200) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        const json: MarvelResponse = await response.json();
        if (json.code !== 200) {
          return json;
        }
        setData(json);
        setIsLoading(false);
        setIsError(false);
        setResults([...results, ...json.data.results]);
        setHasMore(json.data.total > results.length + limit.current);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
        return error;
      }
    };
    doFetch();

    return () => {
      controller.abort();
    };
  }, [url, page]);

  return { data, results, isLoading, isError, hasMore };
}
