import "./App.css";
import Header from "./components/Header";
import Story from "./components/Story";
import { doFetch } from "./utils/functions";

const fetched = doFetch();

console.log("fetched", fetched);

function App() {
  return (
    <div className="App">
      <Header />
      <Story />
    </div>
  );
}

export default App;
