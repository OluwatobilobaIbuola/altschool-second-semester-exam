import React, { useContext, useEffect, useState } from "react";
import { EventValues } from "./context/context";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { EventValuesContextType, IUserModel } from "./utils/types";
import { Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { getUserLocal, removeUser } from "./utils/helper";
import Clients from "./Pages/Clients";
import { Navbar } from "./components";
import styles from "./styles";
import SingleClient from "./Pages/SingleClient";
const App = () => {
  const [user, setUser] = useState<IUserModel>({
    email: "",
    displayName: "",
    uid: "",
  });
  const [clients, setClients] = useState();
  const { displayName } = user;
  const { mode, setMode } = useContext<EventValuesContextType>(
    EventValues || {}
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          email: user?.email,
          displayName: user?.displayName,
          uid: user?.uid,
          photoUrl: user?.photoURL,
        });
      } else {
        setUser({
          email: "",
          displayName: "",
          uid: "",
        });
        removeUser();
      }
    });
  }, []);

  useEffect(() => {
    const mode = localStorage.getItem("mode");
    if (mode) {
      setMode(mode);
    }
  }, []);
  useEffect(() => {
    const user = getUserLocal();
    setUser({
      email: user?.email,
      displayName: user?.displayName,
      uid: user?.uid,
      photoUrl: user?.photoURL,
    });
  }, []);

  return (
    <div className={mode === "true" ? "dark" : ""}>
      {displayName !== "" && displayName !== undefined ? (
        <div className="dark:bg-primary w-full overflow-hidden relative transition ease-in-out duration-500">
          <div
            className={`fixed right-0 left-0 top-0 filter transition ease-in-out duration-400 h-[100px] ${styles.paddingX} ${styles.flexCenter}`}
          >
            <div className={`${styles.boxWidth}`}>
              <Navbar setUser={setUser} user={user} />
            </div>
          </div>
          <div
            className={`dark:bg-primary transition ease-in-out duration-500`}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="clients"
                element={<Clients setClients={setClients} />}
              >
                <Route
                  path=":userId"
                  element={<SingleClient clients={clients} />}
                />
              </Route>

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      ) : (
        <div
          className={`transition ease-in-out duration-500 dark:bg-primary ${styles.flexStart}`}
        >
          <Routes>
            <Route path="login" element={<Login setUser={setUser} />} />
            <Route path="*" element={<Navigate to="login" replace />} />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default App;
