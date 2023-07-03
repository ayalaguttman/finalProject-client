import React, { useState } from 'react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default function Header() {
    const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

    const handleLoginClick = () => {
        setIsLoginFormOpen(true);
    };

    const handleLoginFormClose = () => {
        setIsLoginFormOpen(false);
    };

    return (

        <header className='container-fluid admin-header bg-transpirent'>
            <div className="container pt-2 ">
                <div className="row align-items-center justify-content-between text-light">
                    <div className="logo col-auto">
                        
                        <Link className='text-dark text-decoration-none' to="/home"><h2 className='text-warning'>stockXplorer</h2></Link>
                    
                    </div>

                    
                    
                </div>
            </div>
        </header>

    )
}
