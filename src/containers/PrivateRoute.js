import React, { Component } from "react";

import { withRouter } from "react-router";
import { checkToken } from "../api/auth";
import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
// import "assets/scss/plugins/extensions/toastr.scss";
class PrivateRoute extends Component {
  state = {
    open: false,
    active: "Accueil",
  };
  handleSideBar = () => this.setState({ open: !this.state.open });
  handleRoute = ({ route, name }) => {
    this.setState({ active: name }, () => {
      this.props.history.replace(route);
    });
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      checkToken(token)
        .then((response) => {})
        .catch((err) => {
          this.props.history.push("login");
        });
    } else {
      this.props.history.push("login");
    }
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        {this.props.children}
      </React.Fragment>
    );
  }
}
export default withRouter(PrivateRoute);