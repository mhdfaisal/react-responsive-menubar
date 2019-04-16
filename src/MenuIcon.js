import React from 'react';
import './MenuIcon.css';
const MenuIcon = ({handleSideNavToggle, showSideNav})=>{

    //Add class menu__button--active to open.
   const handleMenuButtonClick = ()=>{
        handleSideNavToggle();
    }

    return(
        <button className={`menu__button ${showSideNav? ' menu__button--active':''}`} onClick={handleMenuButtonClick}>
            <div className="menu__icon line1"></div>
            <div className="menu__icon line2"></div>
            <div className="menu__icon line3"></div>
        </button>
    )
}
export default MenuIcon;