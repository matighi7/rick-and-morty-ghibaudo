import React from 'react';
import style from "./Card.module.css"
import SearchBar from './SearchBar.jsx';
import {Link, useLocation} from "react-router-dom";

const Nav = ({onSearch}) => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/';

    if (isLoginPage) {
        return null;
        }

    return(
        <nav className={style.navbar}>
            <SearchBar onSearch = {onSearch}/>
            <Link to= '/home' className={style.link}> Home </Link>
            <span className={style.space}></span>
            <Link to= '/about'className={style.link}> About </Link>
            <span className={style.space}></span>
            <Link to="/favorites" className={style.link}> Favorites</Link>
            </nav>
    );
};

export default  Nav ;