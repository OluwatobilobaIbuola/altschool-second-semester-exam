import { useState, useContext, useEffect } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { auth } from "../firebase";
import ThemeMode from "../ThemeMode/theme.mode";
import { removeUser } from "../utils/helper";
import { IUserModel } from "../utils/types";
import { Link, useNavigate } from "react-router-dom";
import { EventValues } from "../context/context";

const Navbar = ({ user, setUser }: { user: IUserModel; setUser: any }) => {
  const { mode, screenSize, setScreenSize } = useContext(EventValues);
  const [active, setActive] = useState<string>("Home");
  const [toggle, setToggle] = useState<boolean>(false);
  const { displayName } = user;

  const Logout = (title: any) => {
    if (title === "Login") {
      auth.signOut();
      removeUser();
      setUser({
        email: "",
        displayName: "",
        uid: "",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="w-full flex py-6 justify-between items-center ">
      <h1 className="font-poppins dark:text-white font-bold text-[28px]">
        Teneeds
      </h1>
      <ThemeMode />
      <ul className="list-none sm:flex hidden justify-end items-center w-[fit-content]">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "dark:text-white" : "dark:text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => {
              Logout(nav.title);
              setActive(nav.title);
            }}
          >
            <Link
              to={
                nav.title === "Login" && displayName !== "" ? "" : `${nav.id}`
              }
            >
              {nav.title === "Login" && displayName !== ""
                ? "Logout"
                : `${nav.title}`}
            </Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title
                    ? "dark:text-white"
                    : "dark:text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => {
                  Logout(nav.title);
                  setActive(nav.title);
                }}
              >
                <Link
                  to={
                    nav.title === "Login" && displayName !== ""
                      ? ""
                      : `${nav.id}`
                  }
                >
                  {" "}
                  {nav.title === "Login" && displayName !== ""
                    ? "Logout"
                    : `${nav.title}`}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
