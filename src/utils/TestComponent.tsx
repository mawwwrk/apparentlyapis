import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CardRoll from "../components/CardRoll";
import DivModal from "../components/DivModal";
import Modal from "../components/Modal";
import useFetch from "../hooks/useFetch";

const Div = styled.div`
  outline: hotpink solid 5px;
  /* height: 640px; */
  height: fit-content;
  width: 95%;
  margin: 10% auto;
  display: flex;
  place-items: center;
  justify-content: center;
`;

export default function TestComponent() {
  const [state, setState] = useState();
  const apiUrl =
    "http://gateway.marvel.com/v1/public/comics?apikey=b1e589bdcf49a1e7df3c58fbf7fcf188&characters=1009368,1009220,1009664,1009189,1009165&dateRange=2007-01-01,2022-01-01&noVariants=true";

  const api = "https://jsonplaceholder.typicode.com/todos/1";
  // const apiUrl = import.meta.env.VITE_MCPI_EVENTS_URL;
  // const [{ data: response, isLoading, error: errMsg }, doFetch] = useFetch(apiUrl);
  // console.log(response);
  // response.data.results && setState(response.data.results);
  // console.log(useCache());
  const t1 = "http://gateway.marvel.com/v1/public/";
  const [res, trigger] = useFetch(t1);
  console.log("tr", res);
  const { data, isLoading, error: errMsg } = res;

  const handleClick = () => {};
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
  useEffect(() => {
    trigger(options);
    const res = data?.data?.results ?? data?.results;
    res &&
      res.filter(
        (x) =>
          x.thumbnail.path !==
          "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
      );
    setState((_) => res);
  }, [options.path]);
  return (
    <>
      <Div>
        {isLoading && "loading"}
        {state && (
          <CardRoll
            data={state}
            header="title"
            propsClickHandler={handleClick}
          />
        )}
      </Div>
      <DivModal />
      <Modal />
    </>
  );
}
// ? isModalOpen setter data
