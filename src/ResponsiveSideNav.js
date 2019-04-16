import React from 'react';

import NavItem from './NavItem';
import './ResponsiveSideNav.css';


const renderList = (navitems, linkStyles)=>{
    return(
        <ul className="sidenav__list">
        <NavItem navitems={navitems} linkStyles={linkStyles}/>
        </ul>
    )
}


const ResponsiveSideNav = ({navitems, linkStyles}) =>{
    return(
        <div className="sidenav">
            {renderList(navitems, linkStyles)}
        </div>
    )
}

export default ResponsiveSideNav;
