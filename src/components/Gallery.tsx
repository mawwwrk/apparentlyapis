import { createRef, useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { Card } from "../components/Card";
import useMarvelAPI from "../hooks/useMarvelAPI";
import { urlString } from "../utils/helpers";
import Modal from "./Modal";

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
export default function Gallery() {
  const params = useParams();
  // const base = urlString(params.page);
  const endpoint = params.page || "events";
  const base = urlString(endpoint);

  const [url, setUrl] = useState<string>(base);
  const [page, setPage] = useState<number>(0);
  const modalRef = createRef();
  const observer = useRef();
  const [highlight, setHighlight] = useState();

  const { results, data, isLoading, isError, hasMore } = useMarvelAPI(
    url,
    page
  );
  console.log(data);
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

  useEffect(() => {
    setPage((n) => 0);
    setUrl((u) => urlString(endpoint));
    return () => {
      // second;
    };
  }, [endpoint]);
  const showModal = (cardData) => {
    setHighlight((x) => cardData);
    modalRef.current.showModal();
  };
  const handleClick = (cardData) => {
    cardData ? showModal(cardData) : console.log(cardData);
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
              <Card
                key={info.resourceURI}
                data={info}
                variant="/portrait_incredible"
                propsClickHandler={handleClick}
              />
            )
          )}
      </GridContainer>
      <Modal ref={modalRef}>
        <Card
          data={highlight}
          variant="/landscape_incredible"
          isModalChild={true}
          showText={true}
        />
      </Modal>
    </>
  );
}
