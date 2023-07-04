import axios from 'axios';
import { useForm } from "react-hook-form"
import { doApiMethod, API_URL } from '../services/apiService';
import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthContext } from '../services/context';
import Header from './header';
import Search from './search';
import Login from './login.js';


export default function Item() {

  const [name, setName] = useState("item");
  const [image, setImage] = useState("img");
  const [color, setColor] = useState("color");
  const [info, setInfo] = useState("info");
  const [price, setPrice] = useState("price");




  useEffect(() => {
    // Check if the name exists in the local storage

    const storedItem = localStorage.getItem('itemName');
    const storedImage = localStorage.getItem('img');
    const storedColor = localStorage.getItem('color');
    const storedInfo = localStorage.getItem('info');
    const storedPrice = localStorage.getItem('price');


    if (storedItem) {
      setName(storedItem);
    } else {
      setName('No Item');
    }


    if (storedImage) {
      setImage(storedImage);
    } else {
      setImage(' No image');
    }

    if (storedInfo) {
      setInfo(storedInfo);
    } else {
      setInfo('No info');
    }

    if (storedPrice) {
      setPrice(storedPrice);
    } else {
      setPrice('No price');
    }

    if (storedColor) {
      setColor(storedColor);
    } else {
      setColor('No color');
    }

  }, []);

  const order = () => {
    // מחיקת טוקן
    window.confirm("Order sent, your position in queue 2")
      
  }

  return (
    <div className="container">
      <div className="row justify-content-center">

      <div className="card bg-light bg-opacity-75 w-50 ">
      <div className="row justify-content-center">
        <img src={"../images/" + image}  className="card-img-top w-50 " alt={image}></img>
        <div className="card-body">
          <h5 className="card-title text-secondary">{name}</h5>
          <p className="card-text">{info}</p>
          <p className="card-text">{color}</p>
          <p className="card-text text-success">{price}</p>
          <select className="form-select mb-2" aria-label="Default select example">
                    <option selected>select size</option>
                    <option value="36">36</option>
                    <option value="36">38</option>
                    <option value="36">40</option>
                    <option value="36">42</option>

                </select>
          <button  onClick={order} className="btn btn-primary">Order</button>

        </div>
        </div>

        </div>
      </div>
      </div>

   


  )
}
