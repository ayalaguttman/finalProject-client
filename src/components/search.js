import axios from 'axios';
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { doApiMethod, API_URL } from '../services/apiService';
// import { useDispatch } from 'react-redux';
// import { setData } from '../redux/actions';
import Login from './login.js';
import Item from './item.js';

import { useNavigate } from 'react-router-dom';


export default function Search() {
    const nav = useNavigate();
    // const dispatch = useDispatch();

    
    const [itemData, setItemData] = useState("");

   
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubForm = (bodyData) => {
        // data -> מכיל את כל המאפיינים שלה השמות של האינפוטים עם הערך שלהם
        console.log(bodyData)
        doApiForm(bodyData);
    }

    const doApiForm = async (bodyData) => {
        const {itemCode} = bodyData
        let url = API_URL + `/items/${itemCode}`
        try {
            let resp = await doApiMethod(url, "GET", itemCode);
            setItemData(resp.data)
            console.log(itemData)
            // dispatch(itemData)
            nav('/item', { data: itemData } );

        }
        catch (err) {
            console.log(err.response);
            alert("NO such item, or service down");
        }
    }


    let searchRef = register("itemCode", {
        required: true,
    })



    return (
        <div className='container'>
            <h1 className='text-center text-light'>Hello user</h1>
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
                <nav className='d-flex col justify-content-center p-2'>
                    <button className='btn btn-light' ><Link className='text-dark text-decoration-none' to="/login">login</Link>
                    </button>
                </nav>
            </form>
            {/* <div>
               <img src={"../images/" + itemImg} width={100} alt= {itemImg}></img>
            </div> */}
        </div>
    )
}
