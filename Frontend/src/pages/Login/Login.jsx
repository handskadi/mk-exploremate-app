import Footer from "../../compenents/Footer/Footer";
import Header from "../../compenents/Header/Header";
import PropTypes from "prop-types";

function Login({ isLoggedIn, setIsLoggedIn }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Footer />
    </>
  );
}

Login.propTypes = {
  isLoggedIn: PropTypes.bool,
  setIsLoggedIn: PropTypes.fun,
};

export default Login;
