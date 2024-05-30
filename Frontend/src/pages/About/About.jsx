import Header from "../../compenents/Header/Header";
import PropTypes from "prop-types";

function About({ state, dispatch }) {
  return <Header dispatch={dispatch} state={state} />;
}

About.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object,
};
export default About;
