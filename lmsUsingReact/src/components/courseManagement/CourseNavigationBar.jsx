import { Link } from "react-router-dom";
import "./CourseNav.css";

function CourseNavigationBar() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <Link to="/register">Registration</Link>
        </li>
        <li>
          <Link to="/list">List</Link>
        </li>
        <li>
          <Link to="/detail">Detail</Link>
        </li>
        <li>
          <Link to="/delete">Delete</Link>
        </li>
        <li>
          <Link to="/update">Update</Link>
        </li>
      </ul>
    </nav>
  );
}

export default CourseNavigationBar;
