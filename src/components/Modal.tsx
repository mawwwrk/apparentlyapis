import { forwardRef } from "react";
import styled from "styled-components";
import bg from "../assets/avbg.png";

const Dialog = styled.dialog`
  &&::backdrop {
    background-image: url(${bg});
    background-size: cover;
    opacity: 0.2;
    backdrop-filter: blur(10px);
  }
`;

function Modal(props) {
  return <Dialog className="Modal">{props.children}</Dialog>;
}
export default Modal;
