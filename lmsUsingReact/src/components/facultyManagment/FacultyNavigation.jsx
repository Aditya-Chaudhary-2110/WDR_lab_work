import { Link } from "react-router-dom";
import "./FacultyNavigation.css";

function FacultyNavigation() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <Link to="/faculty/register">Register</Link>
        </li>
        <li>
          <Link to="/faculty/list">List</Link>
        </li>
        <li>
          <Link to="/faculty/profile">Profile</Link>
        </li>
        <li>
          <Link to="/faculty/delete">Delete</Link>
        </li>
        <li>
          <Link to="/faculty/update">Update</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FacultyNavigation;
