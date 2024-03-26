import { IconButton } from "@mui/material";
import "./SystemList.css";
import SettingsIcon from "@mui/icons-material/Settings";

export default function SystemList() {
  return (
    <div className="box">
      <h1 id="title">System List</h1>
      <div className="system-box">
        <h1>System 1</h1>
        <IconButton>
          <SettingsIcon className="setting-icon" />
        </IconButton>
      </div>
      <div className="system-box">
        <h1>System 2</h1>
        <IconButton>
          <SettingsIcon className="setting-icon" />
        </IconButton>
      </div>
    </div>
  );
}
