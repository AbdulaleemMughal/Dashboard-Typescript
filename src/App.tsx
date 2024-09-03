import React from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Card from "./components/Cards";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="row m-0">
        <SideBar
          styles={{ fontSize: "20px", cursor: "pointer" }}
          menuStyle={{ fontSize: "25px", cursor: "pointer", marginTop: "5px" }}
        />
        <div className="col-md-10">
          <Card />
          <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
