import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form"
import { doApiMethod, API_URL } from '../services/apiService';
import { useNavigate } from 'react-router-dom';
//import { useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';


export default function Item() {
 
  //const location = useLocation();
  //const { data } = location.state;
  // const data = useSelector(state => state.itemData);

  // console.log(data);

  return (
    <div className='container'>
      <h1 className='text-center text-light'>Item</h1>
      {/* <div>Data received: {data}</div>; */}

    </div>
  )
}
