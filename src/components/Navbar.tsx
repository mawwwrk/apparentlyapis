import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div id="navbar">
      <Link to="/characters">
        <h5>Characters</h5>
      </Link>
      <Link to="/stories">
        <h5> Stories</h5>
      </Link>
      <Link to="/events">
        <h5>Events</h5>
      </Link>
      <Link to="/comics">
        <h5>Comics</h5>
      </Link>
      {/* <Link to="/test">test</Link> */}
    </div>
  );
}
