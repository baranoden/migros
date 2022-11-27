import React from "react";
import { Navbar } from "react-bootstrap";
import { data } from "./data/nav";
import "./BottomBar.scss";

const BottomBar = () => {
  return (
    <Navbar className={"bottom-bar"} expand="lg">
      <div className="data">
        {data.map((i, k) => (
          <img alt="bot-bar-item" key={k} src={i.img} />
        ))}
      </div>
    </Navbar>
  );
};

export default BottomBar;
