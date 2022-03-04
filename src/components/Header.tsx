import banner from "../MCU_Films_Logos.webp";
import logo from "../logo.svg";
import { Marquee } from "./Marquee";

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Marquee imgsrc={banner} animSeconds="180" />
    </header>
  );
}
