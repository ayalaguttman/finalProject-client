import React, { useState , useEffect} from 'react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default function Header() {
    const [name, setName] = useState("user");
    const [role, setRole] = useState("user");
    const [isAdmin, setIsAdmin] = useState(false);
    const [isWorker, setIsWorker] = useState(false);
    console.log(isAdmin);

    useEffect(() => {
      // Check if the name exists in the local storage
      
      const storedName = localStorage.getItem('name');
      const storedRole = localStorage.getItem('role');
  
      if (storedName) {
        setName(storedName);
      } else {
        setName('Guest');
      }
      if (storedRole) {
        setRole(storedRole);
      } else {
        setRole('user');
      }
      
    if (role == "admin") {
        setIsAdmin(true)
    }else if(role == "worker"){
        setIsWorker(true)
    }
    }, []);


   

    return (

        <header className='container-fluid admin-header bg-transpirent'>
            <div className="container pt-2 ">
                <div className="row align-items-center justify-content-between text-light">
                    <div className="logo col-auto">
                        
                        <Link className='text-dark text-decoration-none' to="/"><h2 className='text-warning'>stockXplorer</h2></Link>
                    
                    </div>

                    <div className=" col-auto">

                    </div>
                   
                    
                    
                </div>
            </div>
        </header>

    )
}
