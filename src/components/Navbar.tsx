import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div id="navbar">
      <Link to="/apparentlyapis/characters">
        <h5>Characters</h5>
      </Link>
      <Link to="/apparentlyapis/series">
        <h5> Series</h5>
      </Link>
      <Link to="/apparentlyapis/events">
        <h5>Events</h5>
      </Link>
      <Link to="/apparentlyapis/comics">
        <h5>Comics</h5>
      </Link>
      {/* <Link to="/test">test</Link> */}
    </div>
  );
}
