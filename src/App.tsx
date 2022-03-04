import "./App.css";
import Header from "./components/Header";
import Event from "./components/Event";
import data from "./data";

export default function App() {
  return (
    <div className="App">
      <Header />
      {/* <img src={bannerRoll} alt="banner roll" /> */}
      <div className="container">
        {false &&
          data.map((item) => {
            const id = item.id;
            return <Event key={id} {...item} />;
          })}
      </div>
      {/* <TestComponent /> */}
    </div>
  );
}
