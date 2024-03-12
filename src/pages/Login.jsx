import { useState } from "react";
import { Button } from "@mui/material";
import logoWhite from "../assets/logoIjo.svg";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/providers/AuthProvider";
import { useForm } from "react-hook-form";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  // /**
  //  * @type {React.MutableRefObject<HTMLInputElement>}
  //  */
  // const emailRef = useRef(null);
  // /**
  //  * @type {React.MutableRefObject<HTMLInputElement>}
  //  */
  // const passwordRef = useRef(null);
  // /**
  //  * @param {React.FormEvent<HTMLFormElement>} event
  //  */

  async function submit(data) {
    try {
      await login(data.email, data.password);
      navigate("/");
    } catch (error) {
      setError("root", {
        message: "*Email/Password yang anda masukkan salah",
      });
      console.error(error);
    }
  }

  return (
    <div className="page">
      <div className="container">
        <div className="form-login">
          <form className="login" onSubmit={handleSubmit(submit)}>
            <h1>Login</h1>
            <input {...register("email")} type="text" placeholder="Email" />
            <input
              {...register("password")}
              type={isShow ? "text" : "password"}
              placeholder="Password"
            />
            <div className="check">
              <input
                className="checkbox"
                type="checkbox"
                checked={isShow}
                onChange={() => setIsShow(!isShow)}
              />
              Tampilkan Password
            </div>
            <Button variant="contained" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Loading..." : "Submit"}
            </Button>
            {errors.root && <p>{errors.root.message}</p>}
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
