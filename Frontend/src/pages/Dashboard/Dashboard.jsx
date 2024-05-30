import Footer from "../../compenents/Footer/Footer";
import Header from "../../compenents/Header/Header";
import PropTypes from "prop-types";

function Dashboard({ dispatch, state }) {
  return (
    <>
      <Header state={state} dispatch={dispatch} />
      <Footer />
    </>
  );
}

Dashboard.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object,
};
export default Dashboard;
