import React, { useEffect, useState } from "react";
import { MdDashboard } from "react-icons/md";
import { MdOutlineComputer } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import classNames from "classnames";
import { IoPersonCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { HiInboxArrowDown } from "react-icons/hi2";

type SideBarProps = {
  styles: React.CSSProperties;
  menuStyle: React.CSSProperties;
};

const SideBar = ({ styles, menuStyle }: SideBarProps) => {
  const [openMenu, setOpenMenu] = useState<boolean>(true);
  const [hamburgerMenu, setHamburgerMenu] = useState<boolean>(false);
  const [handleSize, setHandleSize] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setOpenMenu(false);
        setHamburgerMenu(true);
        setHandleSize(true);
      } else {
        setOpenMenu(true);
        setHamburgerMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="col-md-2">
      <div
        className={classNames(
          openMenu
            ? "text-white h-[100vh] w-52 transition-all duration-500"
            : "h-10 text-white",
          handleSize ? "h-fit" : "h-[100vh]"
        )}
      >
        <div className="mx-3">
          <div className="flex justify-between">
            <h1 className="text-3xl font-serif pb-3">CORONA</h1>
            {hamburgerMenu && (
              <TiThMenu
                style={menuStyle}
                onClick={() => setOpenMenu(!openMenu)}
              />
            )}
          </div>

          {openMenu && (
            <>
              <p className="py-2 text-xl">Navigations</p>
              <ul>
                <Link to="/">
                  <li className="text-sm link py-3 hover:bg-white hover:text-black">
                    <MdDashboard style={styles} />
                    <a className="pl-3" href="#">
                      Dashboard
                    </a>
                  </li>
                </Link>
                <Link to="/inventory">
                  <li className="text-sm link py-3 hover:bg-white hover:text-black">
                    <MdOutlineComputer style={styles} />
                    <a className="pl-3" href="#">
                      Inventory
                    </a>
                  </li>
                </Link>
                <Link to="/order">
                  <li className="text-sm link py-3 hover:bg-white hover:text-black">
                    <HiInboxArrowDown style={styles} />
                    <a className="pl-3" href="#">
                      Orders
                    </a>
                  </li>
                </Link>
                <Link to="/customer">
                  <li className="text-sm link py-3 hover:bg-white hover:text-black">
                    <IoPersonCircle style={styles} />
                    <a className="pl-3" href="#">
                      Customers
                    </a>
                  </li>
                </Link>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
