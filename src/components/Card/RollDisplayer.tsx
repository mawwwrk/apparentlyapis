import { useEffect, useState } from "react";
import styled from "styled-components";
import useFetch from "../../hooks/useFetch";
import CardRoll from "../CardRoll";

const Div = styled.div`
  /* height: 640px; */
  height: fit-content;
  width: 90%;
  margin: 10% auto;
  display: flex;
  place-items: center;
  justify-content: center;

  && > .flex-container {
    display: flex;
    place-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
const base = "http://gateway.marvel.com/v1/public/";
export default function RollDisplayer() {
  const [state, setState] = useState();
  const apiUrl =
    "http://gateway.marvel.com/v1/public/comics?apikey=b1e589bdcf49a1e7df3c58fbf7fcf188&characters=1009368,1009220,1009664,1009189,1009165&dateRange=2007-01-01,2022-01-01&limit=100&noVariants=true";
  const [response, callFetch] = useFetch(base);
  const { data, isLoading, error: errMsg } = response;
  const options = {
    path: "series",
    options: {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        referer: "http://localhost:3000",
      },
    },
    queryParams: { limit: 100, events: "314,315,238" },
  };

  // endregion pulling
  useEffect(() => {
    callFetch(options);

    const res = data?.data?.results ?? data?.results;
    setState((_) => res);
  }, [options.path]);

  return (
    <Div>{state && <CardRoll className="flex-container" data={state} />}</Div>
  );
}
