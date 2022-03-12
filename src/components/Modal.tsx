// @ts-nocheck
import { forwardRef } from "react";

import styled from "styled-components";
import bg from "../assets/avbg.png";

const Dialog = styled.dialog.attrs((props) => {
  const { open } = props;
  return {
    open,
  };
})`
  height: fit-content;
  width: fit-content;
  position: fixed;
  /* ${(props) => {
    return props.open ? "display: block;" : "display: none;";
  }} */

  &&::backdrop {
    background-image: url(${bg});
    background-size: cover;
    height: 100vh;
    width: 100vw;
    opacity: 0.4;
  }
  && > * {
    max-width: 500px;
    max-height: 500px;
  }
`;

const Modal = forwardRef(function Modal(props, ref) {
  const { children } = props;
  return (
    <Dialog className="Modal" ref={ref}>
      {children}
    </Dialog>
  );
});

export default Modal;
