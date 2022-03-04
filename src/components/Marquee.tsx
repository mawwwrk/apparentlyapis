import styled, { keyframes } from "styled-components";
import { getImageDimensions } from "../utils/functions";

type MarqueeProps = {
  imgsrc: string;
  animSeconds: string;
};

const ClipWindow = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  overflow: hidden;
`;

const scroll = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-100%);
  }
`;

const ScrollingImage = styled.div.attrs((props: MarqueeProps) => {
  const { width, aspectRatio } = getImageDimensions(props.imgsrc);
  return {
    ...props,
    width,
    aspectRatio,
  };
})`
  animation: ${scroll} ${(props) => props.animSeconds}s linear infinite;
  background-image: url(${(props) => props.imgsrc});
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  width: min(80vw, ${(props) => props.width}px);
  aspect-ratio: ${(props) => props.aspectRatio};

  &&:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.imgsrc});
    background-size: 100%;
    transform: translate(-50%, 100%);
  }
`;

function Marquee(props: MarqueeProps) {
  return (
    <>
      <ClipWindow className="marquee-container">
        <ScrollingImage className="marquee-image" {...props} />
      </ClipWindow>
    </>
  );
}

export { Marquee };
