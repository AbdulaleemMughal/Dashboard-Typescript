import { useEffect, useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Cards from "./components/Cards";
import classNames from "classnames";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inventory from "./components/Inventory";
import Customer from "./components/Customer";
import Order from "./components/Order";

function App() {
  const [handleSidebar, setHandleSidebar] = useState<boolean>(true);

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

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="row m-0">
          <div
            className={classNames(
              handleSidebar ? "sidebar" : "col-md-2 sidebar-container"
            )}
          >
            <SideBar
              styles={{ fontSize: "20px", cursor: "pointer" }}
              menuStyle={{
                fontSize: "25px",
                cursor: "pointer",
                marginTop: "5px",
              }}
            />
          </div>
          <div
            className={classNames(handleSidebar ? "main-content" : "col-md-10")}
          >
            <Cards />
            <Footer />
          </div>
        </div>
      ),
    },
    {
      path: "/inventory",
      element: (
        <div className="row m-0">
          <div
            className={classNames(
              handleSidebar ? "sidebar" : "col-md-2 sidebar-container"
            )}
          >
            <SideBar
              styles={{ fontSize: "20px", cursor: "pointer" }}
              menuStyle={{
                fontSize: "25px",
                cursor: "pointer",
                marginTop: "5px",
              }}
            />
          </div>
          <div
            className={classNames(handleSidebar ? "main-content" : "col-md-10")}
          >
            <Inventory />
            <Footer />
          </div>
        </div>
      ),
    },
    {
      path: "/order",
      element: (
        <div className="row m-0">
          <div
            className={classNames(
              handleSidebar ? "sidebar" : "col-md-2 sidebar-container"
            )}
          >
            <SideBar
              styles={{ fontSize: "20px", cursor: "pointer" }}
              menuStyle={{
                fontSize: "25px",
                cursor: "pointer",
                marginTop: "5px",
              }}
            />
          </div>
          <div
            className={classNames(handleSidebar ? "main-content" : "col-md-10")}
          >
            <Order />
            <Footer />
          </div>
        </div>
      ),
    },
    {
      path: "/customer",
      element: (
        <div className="row m-0">
          <div
            className={classNames(
              handleSidebar ? "sidebar" : "col-md-2 sidebar-container"
            )}
          >
            <SideBar
              styles={{ fontSize: "20px", cursor: "pointer" }}
              menuStyle={{
                fontSize: "25px",
                cursor: "pointer",
                marginTop: "5px",
              }}
            />
          </div>
          <div
            className={classNames(handleSidebar ? "main-content" : "col-md-10")}
          >
            <Customer />
            <Footer />
          </div>
        </div>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
