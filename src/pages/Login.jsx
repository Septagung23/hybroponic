import { useRef } from "react";
import { Button } from "@mui/material";
import logoWhite from "../assets/logoIjo.svg";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/providers/AuthProvider";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  /**
   * @type {React.MutableRefObject<HTMLInputElement>}
   */
  const emailRef = useRef(null);

  /**
   * @type {React.MutableRefObject<HTMLInputElement>}
   */
  const passwordRef = useRef(null);

  /**
   * @param {React.FormEvent<HTMLFormElement>} event
   */
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="page">
      <div className="container">
        <div className="form-login">
          <form className="login" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input ref={emailRef} type="text" placeholder="Email" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            {/* <TextField id="username" label="Username" variant="outlined" /> */}
            {/* <TextField
              id="password"
              label="Password"
              variant="outlined"
              type="password"
            /> */}
            <Button variant="contained" type="submit">
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
