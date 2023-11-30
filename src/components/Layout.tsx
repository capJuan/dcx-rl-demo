import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
        <h3>Logout</h3>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
