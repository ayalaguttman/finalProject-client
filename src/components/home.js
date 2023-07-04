import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthContext } from '../services/context';

import Header from './header';
import Search from './search';
import Login from './login.js';

export default function Home() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const nav = useNavigate();

  const [name1, setName1] = useState(localStorage.getItem('name'));

  // const { userData, setUserData } = useState(" ");


  const [name, setName] = useState("user");
  const [role, setRole] = useState("user");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isWorker, setIsWorker] = useState(false);
  console.log(isAdmin);

  useEffect(() => {

  }, [isLoggedIn])


  useEffect(() => {
    // Check if the name exists in the local storage

    const storedName = localStorage.getItem('name');
    const storedRole = localStorage.getItem('role');

    if (storedName) {
      setName(storedName);
    } else {
      setName('Guest');
    }


    if (storedRole) {
      setRole(storedRole);
      if (localStorage.getItem('role') == "admin") {
        setIsAdmin(true)
      } else if (localStorage.getItem('role') == "worker") {
        setIsWorker(true)
      }
    } else {
      setRole('user');
    }


  }, []);

  const onLogOut = () => {
    // מחיקת טוקן
    if (window.confirm("Are you sure you want to logout ?")) {
      localStorage.removeItem("token")
      localStorage.removeItem("name")

      localStorage.setItem('role', "user");

      // להעביר לעמוד לוג אין
    }
  }


  return (
    <div className="container ">

      <h1 className="text-light">hello {name} </h1>

      {isAdmin && <div >
        <Link className='text-decoration-none' to="/admin"><p className='text-light'>admin page</p></Link>
      </div>}
      {!isLoggedIn ? (
        <Link to="/login">
          <button className="btn btn-light" >login</button>
        </Link>

      ) :
        (

          <button className="btn btn-light" onClick={onLogOut}>log Out</button>

        )}

      <Search />
    </div>
  );
}

