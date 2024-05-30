import { useState } from "react";
import Footer from "../../compenents/Footer/Footer";
import Header from "../../compenents/Header/Header";
import styles from "./Login.module.css";
import PropTypes from "prop-types";
import Button from "../../compenents/Button/Button";
import { useNavigate } from "react-router-dom";

const LOGINEMAIL = "alx@swe.com";
const LOGINPASSWORD = "alx123";

function Login({ dispatch, state }) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  function handleLoginSubmit(e) {
    e.preventDefault();
    if (loginEmail === LOGINEMAIL && loginPassword === LOGINPASSWORD) {
      dispatch({ type: "login" });
      navigate("/dashboard");
    }
  }

  return (
    <>
      <Header state={state} dispatch={dispatch} />
      <div className={styles.container}>
        <div className={styles.loginContainer}>
          <form onSubmit={handleLoginSubmit}>
            <label>Your email</label>
            <input
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <label>Your password</label>
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <Button> Login</Button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object,
};

export default Login;
