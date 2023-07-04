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


export default function Oreders() {

    const [name, setName] = useState("item");
    const [image, setImage] = useState("img");


    useEffect(() => {
        // Check if the name exists in the local storage

        const storedItem = localStorage.getItem('itemName');
        const storedImage = localStorage.getItem('img');

        if (storedItem) {
            setName(storedItem);
        } else {
            setName('Item');
        }


        if (storedImage) {
            setImage(storedImage);
        } else {
            setImage('image');
        }

    }, []);

    return (
        <div className='container'>
            <div className='col-md-6 p-3 shadow mx-auto text-center'>

                <h1 className='text-center text-light'>Please select a branch near you</h1>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Petah - Tikva</option>
                    <option value="Ramat - Gan">Ramat - Gan</option>
                    <option value="Tel - Aviv">Tel - Aviv</option>
                    <option value="TTTTTizi">TTTTTizi</option>
                </select>
            </div>
        </div>
    )
}
