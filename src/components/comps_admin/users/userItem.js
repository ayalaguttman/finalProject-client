import React from 'react'
import { API_URL, doApiMethod } from '../../services/apiService';

export default function UserItem(props) {
  let item = props.item;

  // משנה תפקיד של משתמש
  const onRoleClick = async() => {
    let bodyData;
    if(item.role == "user"){
      bodyData = {role:"worker"}
    }
    else{
      bodyData = {role:"user"}
    }

    let url = API_URL+"/users/changeRole/"+item._id;
    try{
      let resp = await doApiMethod(url,"PATCH",bodyData)
      console.log(resp.data)
      if(resp.data){
         props.doApi()
      }
    }
    catch(err){
      console.log(err.response);
      alert("There problem, or you try to change superAdmin to user");
    }
  }

  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      
      <td>{item.phone}</td>
      <td>{item.birthDate}</td>
      <td>{item.address.city}</td>
      <td>{item.address.street}</td>
      <td>{item.address.houseNumber}</td>
      <td>
        <button onClick={onRoleClick}>
          {item.role}
          </button>
        </td>
      <td>{String(item.active)}</td>
      <td>
     
        <button className='badge bg-danger'>Del</button>
      </td>
    </tr>
  )
}
