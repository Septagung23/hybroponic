import { Button } from "@mui/material";
import logoWhite from "../assets/logoIjo.svg";
import "./Login.css";

export default function Login() {
  return (
    <div className="page">
      <div className="container">
        <div className="form-login">
          <form className="login">
            <h1>Login</h1>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            {/* <TextField id="username" label="Username" variant="outlined" /> */}
            {/* <TextField
              id="password"
              label="Password"
              variant="outlined"
              type="password"
            /> */}
            <Button variant="contained" href="/">
              Submit
            </Button>
          </form>
        </div>
        <div className="content">
          <img src={logoWhite} style={{ width: "5rem" }} />
          <h1>Hybroponic</h1>
        </div>
      </div>
    </div>
  );
}
