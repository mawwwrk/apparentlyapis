import logo from "../logo.svg";
import { ScrollingBanner } from "./ScrollingBanner";

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <ScrollingBanner />
    </header>
  );
}
