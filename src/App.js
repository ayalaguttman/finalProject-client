
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { configureStore } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";
import { AuthProvider } from './services/context';

import Header from './components/header';
import Home from './components/home';
import Login from './components/login';
import Item from './components/item';
import Orders from './components/orders';
function App() {

  // const myStore = configureStore({
  //   reducer: {
  //     counterSlice,

  //   }
  // })


  return (
    <AuthProvider>

    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/item" element={<Item />} />
          <Route path="/orders" element={<Orders />} />

        </Routes>

    </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
