import { Link } from "react-router-dom";
import "./SystemList.css";

export default function SystemList() {
  return (
    <div className="system-container">
      <h1 id="title">System List</h1>
      <Link to="/system">
        <button color="inherit" className="add-button">
          Add System
        </button>
      </Link>
      <div className="system-box">
        <h1>System 1</h1>

        <div className="button-box">
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
          <Link to="/editsystem">
            <button>Setting</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
