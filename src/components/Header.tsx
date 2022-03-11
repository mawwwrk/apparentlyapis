import banner from "../assets/MCU_Films_Logos.webp";
import reactLogo from "../logo.svg";
import marvelLogo from "../assets/Marvel_Logo.svg";
import { Marquee } from "./Marquee";

export default function Header() {
  return (
    <header className="App-header">
      <div className="App-logo">
        <img src={reactLogo} className="logo react-logo" alt="react logo" />
        <img src={marvelLogo} className="logo marvel-logo" alt="marvel" />
      </div>
      <Marquee imgsrc={banner} animSeconds="180" />
    </header>
  );
}
