import { createRef, useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "./Card";
import CardRoll from "./CardRoll";
import Modal from "./Modal";
import useFetch from "../hooks/useFetch";

const Div = styled.div`
  height: fit-content;
  width: 95%;
  display: flex;
  justify-content: center;
`;

export default function Gallery() {
  const [state, setState] = useState();
  const ref = createRef();
  const t1 = "http://gateway.marvel.com/v1/public/";
  const [options, setOptions] = useState({
    path: "series",
    options: {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        referer: "http://localhost:3000",
      },
    },
    queryParams: { limit: 100, events: "314,315,238" },
  });

  const [spotlight, setSpotlight] = useState({});
  const [res, trigger] = useFetch(t1);
  const { data, isLoading, error: errMsg } = res;

  const handleClick = (cardData) => {
    ref.current.showModal();
    setSpotlight((x) => cardData);
    const path = /(?<=public\/)\S+(?=\?|$|")/.exec(spotlight?.resourceURI)?.[0];
    if (path) {
      setOptions((base) => {
        return {
          ...base,
          path,
          queryParams: { limit: 20 },
        };
      });
      // trigger(options);
    }
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
  }, [options]);

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
      <Modal ref={ref}>
        <Card
          variant={"/landscape_incredible"}
          data={spotlight}
          onClick={() => {}}
          isModalChild={true}
          showText={true}
        />
      </Modal>
    </>
  );
}
