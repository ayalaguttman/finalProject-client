import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { doApiMethod, API_URL } from '../services/apiService';
import Item from './item.js';
import { Link,Navigate, useNavigate } from 'react-router-dom'


export default function Search() {

    const nav = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubForm = (bodyData) => {
        console.log(bodyData)
        doApiForm(bodyData);
    }

    const doApiForm = async (bodyData) => {
        const {itemCode} = bodyData
        let url = API_URL + `/items/${itemCode}`
        try {
            let resp = await doApiMethod(url, "GET", itemCode);
            console.log(resp.data)
            let item = resp.data
            localStorage.setItem('item', item);

            let nameItem =item.name
            console.log(nameItem);
            localStorage.setItem('itemName', nameItem);
            let imgItem =item.img_url
            localStorage.setItem('img', imgItem);


            nav("/item");

        }
        catch (err) {
            console.log(err.response);
            if (window.confirm("not in store, would you like to check on another branch ?")) {
               nav("/orders")
          
                // להעביר לעמוד לוג אין
              }
        }
    }

    let searchRef = register("itemCode", {
        required: true,
    })

    return (
        <div className='container'>
            <h1 className='text-center text-light'>search</h1>
            <form onSubmit={handleSubmit(onSubForm)} className='col-md-6 p-3 shadow mx-auto text-center'>
                <h1 className='text-center text-light
            '>Search By CODE</h1>
            <div className='row g-2'>
                <input  {...searchRef} className="col-md-8 "
                    type="search"
                    placeholder="Search..."
                    aria-label="Search" />
                <button className="btn btn-outline-light col-md-3" type="submit">Search</button>
            </div>
                {/* <nav className='d-flex col justify-content-center p-2'>
                    
                    <button className='btn btn-light' onClick={setShowLogin(true)} >login</button>
                    {showLogin && <Login/>}
                </nav> */}
            </form>
            {/* <div>
               <img src={"../images/" + itemImg} width={100} alt= {itemImg}></img>
            </div> */}
        </div>
    )
}
