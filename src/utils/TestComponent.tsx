//@ts-nocheck
import { useCallback, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { Card } from "../components/Card";
import useMarvelAPI from "../hooks/useMarvelAPI";
import { urlString } from "./helpers";

const GridContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  width: fit-content;
  height: fit-content;
  margin: 0 auto;

  && p {
    margin: 0 auto;
    max-width: 200px;
  }
`;

const StyledP = styled.p`
  font-size: 1.5rem;
  &&::before,
  &&::after {
    font-weight: bold;
    color: darksalmon;
    width: 100%;
    height: 1px;
  }
  &&::before {
    content: "!>";
  }
  &&::after {
    content: "!<";
  }
`;

const StyledDiv = styled.div`
  transition: all 1s ease-in-out;
`;
export default function TestComponent() {
  const base = urlString("series");

  const [url, setUrl] = useState<string>(base);
  const [page, setPage] = useState<number>(0);

  const observer = useRef();

  const { results, data, isLoading, isError, hasMore } = useMarvelAPI(
    url,
    page
  );
  const lastElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  const handleClick = () => {
    console.log("clicked");
    setPage((pg) => pg + 1);
  };

  return (
    <>
      <GridContainer>
        {results &&
          Array.isArray(results) &&
          results.map((info, i) =>
            results.length === i + 1 ? (
              <div ref={lastElementRef} key={i} />
            ) : (
              <Card key={info.id} data={info} variant="/portrait_incredible" />
            )
          )}
      </GridContainer>
    </>
  );
}
