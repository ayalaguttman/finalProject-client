
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './header';
import Search from './search';
import Login from './login.js';

export default function Home() {
  return (
      
      
      <Routes>

        <Route path="/login" element={<Login />} />

        

      </Routes>
   
  );
}

