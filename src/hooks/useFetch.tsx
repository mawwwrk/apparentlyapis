// @ts-nocheck

import { useEffect, useState } from "react";
import { URLObject } from "../utils/classes";
import { d } from "../utils/functions";

type FetchParameters = {
  base: string;
  path: string;
  queryParams: { [key: string]: string } | { [key: number]: string };
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
    if (!request?.options)
      request.options = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          referer: "http://localhost:3000",
        },
      };

    setRequest(request);

    urlObject.path = request?.path ?? "";
    urlObject.queryParams = request?.queryParams ?? { limit: 50 };

    setUrl(urlObject.url);
    console.log(urlObject.url);
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
