import { Outlet, Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
    <h1>NavBar.jsxのページを表示しています。</h1>
    {console.log('NavBar.jsxのページを表示しています。')}
      <nav>
        <ul>
          <li>
            <Link to="/">Link to Top</Link>
          </li>
          <li>
            <Link to="/home">Link to Home</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};