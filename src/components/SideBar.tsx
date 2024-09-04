import React, { useEffect, useState } from "react";
import { MdDashboard } from "react-icons/md";
import { MdOutlineComputer } from "react-icons/md";
import { FaElementor } from "react-icons/fa";
import { BsTable } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";
import { FaShieldVirus } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import classNames from "classnames";

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
          openMenu ? "text-white h-[100vh] w-52 transition-all duration-500" : "h-10 text-white",
          handleSize ? "h-fit" : "h-[100vh]"
        )}
      >
        <div className="mx-3">
          <div className="flex justify-between">
            <h1 className="text-3xl font-serif pb-3">CORONA</h1>
            {hamburgerMenu && <TiThMenu
              style={menuStyle}
              onClick={() => setOpenMenu(!openMenu)}
            />}
          </div>

          {openMenu && (
            <>
              <p className="py-2 text-xl">Navigations</p>
              <ul>
                <li className="text-sm link py-3 hover:bg-white hover:text-black">
                  <MdDashboard style={styles} />
                  <a className="pl-3" href="#">
                    Dashboard
                  </a>
                </li>
                <li className="text-sm link py-3 hover:bg-white hover:text-black">
                  <MdOutlineComputer style={styles} />
                  <a className="pl-3" href="#">
                    Basic UI Element
                  </a>
                </li>
                <li className="text-sm link py-3 hover:bg-white hover:text-black">
                  <FaElementor style={styles} />
                  <a className="pl-3" href="#">
                    Form Element
                  </a>
                </li>
                <li className="text-sm link py-3 hover:bg-white hover:text-black">
                  <BsTable style={styles} />
                  <a className="pl-3" href="#">
                    Table
                  </a>
                </li>
                <li className="text-sm link py-3 hover:bg-white hover:text-black">
                  <FaChartLine style={styles} />
                  <a className="pl-3" href="#">
                    Charts
                  </a>
                </li>
                <li className="text-sm link py-3 hover:bg-white hover:text-black">
                  <IoPersonCircle style={styles} />
                  <a className="pl-3" href="#">
                    Icons
                  </a>
                </li>
                <li className="text-sm link py-3 hover:bg-white hover:text-black">
                  <FaShieldVirus style={styles} />
                  <a className="pl-3" href="#">
                    User Page
                  </a>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
