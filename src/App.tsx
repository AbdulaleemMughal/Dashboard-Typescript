import { useEffect, useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Card from "./components/Cards";
import Projects from "./components/Projects";
import classNames from "classnames";

function App() {

  const [handleSidebar, setHandleSidebar] = useState<boolean>(true)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setHandleSidebar(false);
      } else {
        setHandleSidebar(true);
      }
    };
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 

  return (
    <>
      <div className="row m-0">
        <div className={classNames(handleSidebar ? "sidebar" : 'col-md-2 sidebar-container')}>
          <SideBar
            styles={{ fontSize: "20px", cursor: "pointer" }}
            menuStyle={{
              fontSize: "25px",
              cursor: "pointer",
              marginTop: "5px",
            }}
          />
        </div>
        <div className={classNames(handleSidebar ? "main-content" : "col-md-10")}>
          <Card />
          <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
