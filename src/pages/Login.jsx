import { Button, TextField } from "@mui/material";
import "./Login.css";

export default function Login() {
  return (
    <div className="page">
      <div className="container">
        <form className="login">
          <h1>Login</h1>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            inputProps={{ style: { textAlign: "center" } }}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
          />
          <Button variant="contained" href="/">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
