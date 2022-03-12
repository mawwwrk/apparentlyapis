import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="container">
        <Outlet />
        {/* {false &&
          data.map((item) => {
            const { id, ...rest } = item;
            return <Event key={id} {...rest} />;
          })} */}
      </div>
    </div>
  );
}
