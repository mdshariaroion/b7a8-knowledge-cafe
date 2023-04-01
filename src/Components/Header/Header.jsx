import React from 'react';
import image from '../../Images/image.png'

const Header = () => {
    return (
        <div>
            <nav className="d-flex justify-content-between align-items-center mx-md-5 px-md-5 mt-3">
                <a className="navbar-brand fs-3 fw-semibold" href="#">
                    Knowledge Cafe
                </a>
                <img src={image} width="40px" height="40px" className="rounded-circle" alt="" />
            </nav>
            <hr className='mt-4 container text-center ' />
        </div>
    );
};

export default Header;