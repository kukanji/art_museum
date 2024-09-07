import { Outlet, Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav>
        <ul className="menu">
          <li>
            <Link to="/">display top page</Link>
          </li>
          <li>
            <Link to="/art">display all arts</Link>
          </li>
          {/* <li>
            <input type="text" placeholder="search"/>
            <button>検索</button>
          </li> */}
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};