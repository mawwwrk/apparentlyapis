import "./App.css";
import Header from "./components/Header";
import Event from "./components/Event";
import data from "./data";
import TestComponent from "./utils/TestComponent";

export default function App() {
  return (
    <div className="App">
      <Header />
      {/* <img src={bannerRoll} alt="banner roll" /> */}
      <div className="container">
        {false &&
          data.map((item) => {
            const { id, ...rest } = item;
            return <Event key={id} {...rest} />;
          })}
      </div>
      <TestComponent />
    </div>
  );
}
