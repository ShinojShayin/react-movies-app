import React, { Component } from "react";
import "./Header.css";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import logo from "../../assets/logo.svg";
import Modal from "react-modal";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      value: 0,
    };
  }

  openModalHandler = () => {
    this.setState({ modelIsOpen: true });
  };

  closeModalHandler = () => {
    this.setState({ modelIsOpen: false });
  };

  tabChangeHandler = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <div className="login-button">
            <Button
              variant="contained"
              color="default"
              onClick={this.openModalHandler}
            >
              Login
            </Button>
          </div>
        </header>
        <Modal
          ariaHideApp={false}
          isOpen={this.state.modelIsOpen}
          contentLabel="Login"
          onRequestClose={this.closeModalHandler}
        >
          <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
            <Tab label="login" />
            <Tab label="Register" />
          </Tabs>
        </Modal>
      </div>
    );
  }
}

export default Header;
