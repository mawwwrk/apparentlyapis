import banner from "../MCU_Films_Logos.webp";
import data from "../data";
import styled from "styled-components";
import { Marquee } from "../components/Marquee";
import { Card } from "../components/Card";

const Div = styled.div`
  outline: hotpink solid 5px;
  height: 640px;
  width: 100%;
  margin: 10% auto;
  display: flex;
  place-items: center;
  justify-content: center;
`;

const cardData = data[3];
export default function TestComponent() {
  return (
    <Div id="test-component">
      {data.map((datum) => (
        <Card key={datum.id} {...datum} />
      ))}
    </Div>
  );
}
