import React from 'react'
import { Link } from 'react-router-dom';
import { API_URL, doApiMethod } from '../../services/apiService';

export default function CategoryItem(props) {
  let item = props.item;

  const onDelClick = async() => {
    if(window.confirm("Are you sure you want to delete: "+item.name)){
      try{
        let url = API_URL+"/items/"+item._id;
        let resp = await doApiMethod(url,"DELETE");
        console.log(resp.data);
        if(resp.data.deletedCount == 1){
          props.doApi();
        }
      }
      catch(err){
        console.log(err.response);
        alert("There problem , try again later")
      }

    }
  }

  return (
    <tr>
      <td>{props.index + 1}</td>
      <td title={item.info}>{item.name}</td>
      <td>{item.category}</td>
      <td><img src={item.img_url} height="40" alt="pic" /></td>
      <td>{item.worker_id}</td>
      <td>{item.price}</td>
      <td>{item.color}</td>
      <td>{item.min_size}</td>
      <td>{item.max-size}</td>
      <td>
        <Link className='btn btn-info me-2' to={"/admin/editItem/"+item._id} >Edit</Link>
        <button onClick={() => {onDelClick()}} className='btn btn-danger'>Del</button>
      </td>
    </tr>
  )
}
