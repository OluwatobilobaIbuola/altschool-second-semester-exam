import { useState, useContext, useEffect } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";
import { auth } from "../firebase";
import ThemeMode from "../ThemeMode/theme.mode";
import { removeUser } from "../utils/helper";
import { IUserModel } from "../utils/types";
import { Link, useNavigate } from "react-router-dom";
import { EventValues } from "../context/context";

const Navbar = () => {
  const navigate = useNavigate();
  const { mode, screenSize, setScreenSize, setUser, user } =
    useContext(EventValues);
  const [active, setActive] = useState<string>("Home");
  const [toggle, setToggle] = useState<boolean>(false);

  const Logout = (title: any) => {
    if (title === "Login") {
      auth.signOut();
      removeUser();
      setUser(null);
      navigate("/login");
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
      <div className="dark:text-dimWhite mr-10 ml-auto w-[fit-content]">
        <ThemeMode />
      </div>
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
            <Link to={nav.title === "Login" && !!user ? "" : `${nav.id}`}>
              {nav.title === "Login" && !!user ? "Logout" : `${nav.title}`}
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
          className={`${!toggle ? "hidden" : "flex"} p-6 ${
            mode === "true" ? "bg-black-gradient" : "bg-white-gradient"
          } absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
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
                <Link to={nav.title === "Login" && !!user ? "" : `${nav.id}`}>
                  {" "}
                  {nav.title === "Login" && !!user ? "Logout" : `${nav.title}`}
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
