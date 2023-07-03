
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { configureStore } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";
import Header from './components/header';
import Home from './components/home';
import Login from './components/login';
import Item from './components/item';

import Search from './components/search';
function App() {

  // const myStore = configureStore({
  //   reducer: {
  //     counterSlice,

  //   }
  // })


  return (
    <BrowserRouter>
      {/* <Provider store={myStore}> */}

        <Routes>
          <Route path="/home/*" element={<Header />} />
          <Route path="/login/*" element={<Header />} />
          <Route path="/home" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/item" element={<Item />} />
        </Routes>
      {/* </Provider> */}

    </BrowserRouter>
  );
}

export default App;
