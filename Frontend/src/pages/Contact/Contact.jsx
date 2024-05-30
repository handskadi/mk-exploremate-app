import Header from "../../compenents/Header/Header";
import PropTypes from "prop-types";

function Contact({ state, dispatch }) {
  return <Header dispatch={dispatch} state={state} />;
}
Contact.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object,
};
export default Contact;
