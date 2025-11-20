import { Link } from "react-router-dom";
import "./CourseNav.css";

function CourseNavigationBar() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <Link to="/course/register">Registration</Link>
        </li>
        <li>
          <Link to="/course/list">List</Link>
        </li>
        <li>
          <Link to="/course/detail">Detail</Link>
        </li>
        <li>
          <Link to="/course/delete">Delete</Link>
        </li>
        <li>
          <Link to="/course/update">Update</Link>
        </li>
      </ul>
    </nav>
  );
}

export default CourseNavigationBar;
