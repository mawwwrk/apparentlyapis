import { useEffect, useState } from "react";
import { URLObject } from "../utils/classes";
import { d } from "../utils/functions";

type FetchParameters = {
  base: string;
  path: string;
  queryParams: Map<string, string>;
  options?: RequestInit;
};

export default function useFetch(urlBase: string) {
  const [url, setUrl] = useState(urlBase);

  const [request, setRequest] = useState<FetchParameters>({
    path: "",
    queryParams: {},
    options: {},
  });
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState();

  const urlObject = new URLObject(
    urlBase,
    request.path,
    request.queryParams,
    request.options
  );

  const triggerFetch = (request: Omit<FetchParameters, "base">) => {
    setRequest(request);
    urlObject.path = request.path;
    urlObject.queryParams = request.queryParams;

    setUrl(urlObject.url);
    setIsLoading(true);
    // setRequest((req) => ({ ...req, ...request }));
  };

  useEffect(
    () => {
      if (!isLoading) return;
      fetch(url, request.options)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setIsLoading(false);
          return data;
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    },
    // if (isLoading) return;
    [isLoading, request.options, url]
  );

  return [{ data, isLoading, error }, triggerFetch] as const;
}
