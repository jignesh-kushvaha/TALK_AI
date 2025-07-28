import React from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const { Header } = Layout;

const Navbar = () => {
  const location = useLocation();
  const selectedKey =
    location.pathname === "/" ? "home" : location.pathname.slice(1);

  return (
    <Header className="navbar-header">
      <div className="navbar-logo">
        Talk AI
      </div>
      <Menu
        mode="horizontal"
        selectedKeys={[selectedKey]}
        className="navbar-menu"
        items={[
          { key: "home", label: <Link to="/">Home</Link> },
          // { key: "chat", label: <Link to="/chat">Chat</Link> },
        ]}
      />
    </Header>
  );
};

export default Navbar;
