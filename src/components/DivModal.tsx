import styled from "styled-components";
import bg from "../assets/avbg.png";
const FixedBG = styled.div.attrs((props) => {
  return props;
})`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 100vh;
  min-width: 100vw;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  backdrop-filter: blur(10px);
  background-color: rgb(30, 30, 30);
  opacity: 0.3;
  display: none;

  && #modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 10.5rem;
    border: 4px solid black;
    min-height: 100vh;
    min-width: 100vw;
    background-color: white;
    opacity: 100%;
  }
`;

function ModalContent() {
  return (
    <>
      <div>
        <h1>Modal Content</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          quidem, doloremque, quisquam dolorum quisquam doloremque, quisquam
        </p>
      </div>
    </>
  );
}

export default function DivModal() {
  return (
    <FixedBG bg={bg}>
      <ModalContent id="modal-content" />
    </FixedBG>
  );
}
