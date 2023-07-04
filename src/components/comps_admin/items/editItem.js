import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { API_URL, doApiGet, doApiMethod } from '../../services/apiService';
import CheckAdminComp from '../checkAdminComp';


export default function EditCategory() {
  const [info, setInfo] = useState({})
  const { register, handleSubmit, formState: { errors } } = useForm();
  const nav = useNavigate();
  const params = useParams();

  // בקשה בהתחלה שתשלוף את כל המידע של הטופס
  useEffect(() => {
    doApiInit();
  }, [])

  const doApiInit = async () => {
    // עושים בקשה לשרת בשביל למלא את הטופס עם המידע 
    // שנרצה לערוך עוד רגע לפריט
    let url = API_URL + "/items/" + params["id"];
    try {
      let resp = await doApiGet(url);
      console.log(resp.data);
      setInfo(resp.data)
    }
    catch(err){
      console.log(err.response);
      alert("There problem try come back later")
    }
  }

  const onSubForm = (bodyFormData) => {
    // data -> מכיל את כל המאפיינים שלה השמות של האינפוטים עם הערך שלהם
    console.log(bodyFormData)
    doApiForm(bodyFormData);
  }

  const doApiForm = async (bodyFormData) => {
    let url = API_URL + "/items/" + params["id"];
    try {

    //   let resp = await doApiMethod(url, "PUT", bodyFormData)
    //   if (resp.data) {
        alert("item update succefuly");
        nav("/admin/items")
      }
    //   else {
    //     alert("There problem , try again later")
    //   }
    // }
    catch (err) {
      console.log(err);
      alert("There problem , or item url already in system")
    }
  }


  return (

    <div className='container'>
      <h2>Edit item</h2>
      {info.url_name ? <form onSubmit={handleSubmit(onSubForm)} className='col-md-6 p-3 shadow'>
        <label>Name:</label>
        <input defaultValue={info.name} {...register("name", { required: true, minLength: 2 })} type="text" className='form-control' />
        {errors.name && <div className='text-danger'>Enter valid name (min 2 chars) </div>}

        <label>Url name:</label>
        {/* disabled - לא מאפשר לגעת באינפוט */}
        <input defaultValue={info.url_name} {...register("url_name", { required: true, minLength: 2 })} type="hidden"   className='form-control' />
        {errors.url_name && <div className='text-danger'>Enter valid url name (min 2 chars) </div>}
        <label>Info:</label>
        <textarea defaultValue={info.info} {...register("info", { required: true, minLength: 2 })} className='form-control' rows="5"></textarea>
        {errors.url_name && <div className='text-danger'>Enter valid info  (min 2 chars) </div>}
        <label>Price:</label>
        <input
  defaultValue={info.price}
  {...register("price", { required: true, min: 0 })}
  type="number"
  step="0.01"
  className="form-control"
/>
{errors.price && (
  <div className="text-danger">Enter a valid price (must be a non-negative number)</div>
)}
        <label>Color:</label>
<select {...register("color", { required: true })} className="form-control">
  <option value="">Select a color</option>
  <option value="pink">Pink</option>
  <option value="black">Black</option>
  <option value="blue">Blue</option>
  <option value="green">Green</option>
  <option value="white">White</option>
  {/* Add more color options here */}
</select>
{errors.color && (
  <div className="text-danger">Please select a color</div>
)}
        <label>min_size:</label>
<input
  {...register("shoeSize", { required: true, min: 1, max: 53 })}
  type="number"
  className="form-control"
/>
{errors.shoeSize && (
  <div className="text-danger">Please enter a valid shoe size between 1 and 53</div>
)}
       <label>Max_size:</label>
<input
  {...register("shoeSize", { required: true, min: 1, max: 53 })}
  type="number"
  className="form-control"
/>
{errors.shoeSize && (
  <div className="text-danger">Please enter a valid shoe size between 1 and 53</div>
)}
        <label>Img url:</label>
        <input defaultValue={info.img_url} {...register("img_url", { required: true, minLength: 2 })} type="text" className='form-control' />
        {errors.img_url && <div className='text-danger'>Enter valid url   (min 2 chars) </div>}
        <img src={info.img_url} alt="img" height="100"/>
        <div className='mt-3'>
          <button className='btn btn-success me-5'>Update</button>
          <Link className='btn btn-danger' to="/admin/items">Back</Link>
        </div>
      </form> : <h2>Loading...</h2> }
    </div>
  )
}
