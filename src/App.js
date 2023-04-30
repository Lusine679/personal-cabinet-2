import React, { useEffect } from "react";
import "./App.css";
import SignIn from "./components/Signin";
import { Navigate, Route, Routes } from "react-router";
import SignUp from "./components/SignUp";
import { Home } from "./components/Home";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser, setUser } from "./redux/redusers/userReduser";
import MyComponent from "./components/MyComponent";

function App() {
  const loggedInUser = useSelector(selectLoggedInUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      dispatch(setUser(u?.email));
      console.log("onAuthStateChanged called", u);
    });
  }, []);

  return (
    <Routes>
      {loggedInUser ? (
        <>
          <Route path="home" element={<Home />} />

          <Route path="test" element={<MyComponent />} />
          <Route path="*" element={<Navigate replace to="home" />} />

        </>
      ) : (
        <>
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="*" element={<Navigate replace to="signin" />} />
        </>
      )}
    </Routes>
  );
}
export default App;
