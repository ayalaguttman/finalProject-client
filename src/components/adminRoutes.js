import React from 'react';
import {Route} from "react-router-dom"
import LoginAdmin from './loginAdmin';
import UsersList from './users/usersList';
import CategoriesList from './categories/categoriesList';
import AddCategoryForm from './categories/addCategoryForm';
import EditCategory from './categories/editCategory';
import FoodsList from './foods/foodsList';


export const adminRoutes = () => {
  return (
    <React.Fragment>
      <Route path="/admin" element={<LoginAdmin />} />
      <Route path="/admin/users" element={<UsersList />} />
      <Route path="/admin/items" element={<ItemsList />} />
      <Route path="/admin/addItem" element={<AddItemForm />} />
      <Route path="/admin/editItem/:id" element={<EditItem />} />
      <Route path="/admin/orders" element={<OrdersList />} />
    </React.Fragment>
  )
}