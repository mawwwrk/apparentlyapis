import "./App.css";
import bannerRoll from "./MCU_Films_Logos.webp";
import Header from "./components/Header";
import Story from "./components/Story";
// import { doFetch } from "./utils/functions";

// const fetched = doFetch();

// console.log("fetched", fetched);

export default function App() {
  return (
    <div className="App">
      <Header />
      {/* <img src={bannerRoll} alt="banner roll" /> */}
      <Story />
    </div>
  );
}
