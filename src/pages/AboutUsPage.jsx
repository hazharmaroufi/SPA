import { Link, Outlet } from "react-router-dom";

import NavBar from "../components/NavBar";

function AboutUsPage() {
  return (
    <div>
      <NavBar />
      <h1>AboutUsPage</h1>
      <ul>
        <li>
          <Link to="programmers">programmers</Link>
        </li>
        <li>
          <Link to="users">users</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default AboutUsPage;
