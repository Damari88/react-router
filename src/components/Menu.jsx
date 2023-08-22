import { Link } from "react-router-dom";
function Menu() {
  return (
    <div>
      <ul className="menu">
        <li className="item-menu">
          <Link to={"/"}>For you</Link>
        </li>
        <li className="item-menu">
          <Link to={"/page01"}>Following</Link>
        </li>
        <li className="item-menu">
          <Link to={"/Page02"}>JavaScript</Link>
        </li>
        <li className="item-menu">
          <Link to={"/Page03"}>Design</Link>
        </li>
        <li className="item-menu">
          <Link to={"/React"}>React</Link>
        </li>
      </ul>
    </div>
  );
}

export { Menu };
