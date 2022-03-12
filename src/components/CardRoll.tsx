// @ts-nocheck
import styled from "styled-components";
// import {} from "styled-components/cssprop";

import { Card } from "./Card";

const GridDiv = styled.div.attrs((props) => {
  const { cols } = props;
  return {
    cols,
  };
})`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);
  grid-gap: 1rem;
  width: 100%;
  height: fit-content;
  margin: 0 auto;
`;

const DivElement = (props) => {
  const { children, cols } = props;
  return <GridDiv cols={cols}>{children}</GridDiv>;
};

export default function CardRoll(props) {
  const { data, propsClickHandler } = props;
  const columns = Math.floor((window.innerWidth * 0.8) / 100);
  return (
    <DivElement className="card-container" cols={columns}>
      {data
        ? data.map((ea) => (
            <Card key={ea.id} data={ea} propsClickHandler={propsClickHandler} />
          ))
        : ""}
    </DivElement>
  );
}
