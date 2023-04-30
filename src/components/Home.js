import React from "react";
import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MyComponent from "./MyComponent";
// import { getUser } from "../userReducer";
import { useSelector } from "react-redux";
import { setUser } from "../redux/redusers/userReduser";


export const Home = () => {
  const email = useSelector(setUser).email;
  console.log(email);
  return (

    <div>
      <div>You are logged in by {email} mail</div>
      <div className="header">
        <div className="container">
          <a href="#" className="logo">logo</a>
          <nav>
            <div className="close-icon"><i className="fa-solid fa-xmark"></i></div>
            <Link to="/test" className="active">Settings</Link>
            <Link to="/test">Chats</Link>
            <Link to="/test">DMs</Link>
            <Link to="/test">New Chat</Link>
            <Link to="/test">New DM</Link>

          </nav>
          <div className="bar-icon"><i className="fa-solid fa-bars"></i></div>
          <div className="overlay"></div>
        </div>
      </div>
      <div className="user_data">
        <div>
          <img src="/" />
        </div>
        <div>
          <h1 className="name">Test</h1>
          <h1 className="surName">Test</h1>
          <p className="email">test@gmail.com</p>
        </div>
      </div>
      <div className="some-info">Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but also the leap
        nto electronic typesetting, remaining essentially unchanged. It was popularised in the
        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
      <Button onClick={() => signOut(auth)}>Sign Out</Button>;
      {/* <Routes>
        <Route path="contact" element={<MyComponent />} />
      </Routes> */}


    </div>

  );
};
