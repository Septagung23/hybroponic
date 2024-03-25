import ResponsiveAppBar from "../components/Navbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Profile.css";

export default function Profile() {
  return (
    <>
      <ResponsiveAppBar />
      <div className="profile-container">
        <AccountCircleIcon className="profile-icon" />
        <button className="edit-button">Edit</button>
        <h1>Joe Mama</h1>
      </div>
    </>
  );
}
