import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <>
    <aside className={styles["side-bar"]}>
      <div className="p-4 fw-bold text-white fs-4 border-bottom border-secondary mb-3">
        <i className="fa-solid fa-check-double me-2"></i>Todo Master
      </div>
      <nav className="nav flex-column px-2">
        <Link to="/" className="nav-link text-white py-3">
          <i className="fa-solid fa-house me-2"></i> Home
        </Link>
        <Link to="/todos" className="nav-link text-white py-3">
          <i className="fa-solid fa-list-check me-2"></i> My Tasks
        </Link>
      </nav>
    </aside>
    </>
    
  )
}
export default Sidebar;
