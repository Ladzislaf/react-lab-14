import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {
    const [currentPage, setCurrentPage] = useState('')
    const currentPageSwitch = (e) => {
        setCurrentPage(e.target.text)
    }

    return (
        <header>
            <Link className={currentPage === 'First page' ? 'active' : ''} to={'/first'} onClick={(e) => currentPageSwitch(e)}>First page</Link>
            <Link className={currentPage === 'Second page' ? 'active' : ''} to={'/second'} onClick={(e) => currentPageSwitch(e)}>Second page</Link>
            <Link className={currentPage === 'Third page' ? 'active' : ''} to={'/third'} onClick={(e) => currentPageSwitch(e)}>Third page</Link>
        </header>
    );
};

export default NavBar;