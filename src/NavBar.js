import React from 'react';
import MenuIcon from './MenuIcon';
import NavItem from './NavItem';
import ResponsiveSideNav from './ResponsiveSideNav';

import './NavBar.css';

const renderSideNav = (children, showSideNav, linkStyles)=>{
    return showSideNav ? 
    <ResponsiveSideNav navitems={children} linkStyles={linkStyles}/> : null

}


const Navbar = ({children, logo, showSideNav, handleSideNavToggle, logoStyles, navBarStyles,linkStyles})=>{
    return(
        <React.Fragment>
        <nav className="navbar" style={navBarStyles}>
            <div className="navbar__icon">
                <div>
                    <MenuIcon handleSideNavToggle={handleSideNavToggle} showSideNav={showSideNav}/>
                </div>
            </div>
            <div className="navbar__nav-left">
                <ul>
                    <NavItem navitems={children.slice(0,Math.floor(children.length/2)+1)} linkStyles={linkStyles}/>
                </ul>
            </div>
            <div className="navbar__logo">
                <img src={logo} alt="logo" className="img-fluid" style={logoStyles}/>
            </div>
            <div className="navbar__nav-right">
                <ul>
                    <NavItem navitems={children.slice(Math.floor(children.length/2)+1, children.length)} linkStyles={linkStyles} />
                </ul>
            </div>
        </nav>
        {renderSideNav(children, showSideNav, linkStyles)}
        </React.Fragment>
    )
}

export default Navbar;