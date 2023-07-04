import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { API_URL, doApiGet } from '../../services/apiService';
import CheckAdminComp from '../checkAdminComp'
import Item from './item';


export default function ItemsList() {

  const [ar, setAr] = useState([]);

  useEffect(() => {
    doApi();
  }, [])

  const doApi = async () => {
    let url = API_URL + "/items/";
    try {
      let resp = await doApiGet(url);
      console.log(resp.data);
      setAr(resp.data);
    }
    catch (err) {
      console.log(err);
      alert("there problem ,try again later")
    }
  }


  return (
    <div className='container py-4'>
      <Link to="/admin/addItem" className='btn btn-success'>Add new item</Link>
      <h1>List of items</h1>
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>category</th>
            <th>img_url</th>
            <th>worker_id</th>
            <th>price</th>
            <th>color</th>
            <th>min_size</th>
            <th>max_size</th>
            <th>Edit/Del</th>
          </tr>
        </thead>
        <tbody>
          {ar.map((item,i) => {
            return(
              <CategoryItem key={item._id} index={i} item={item} doApi={doApi} />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
