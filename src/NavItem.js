import React from 'react';
import uuid from 'uuid/v1';
const renderNavItems = (navitems, linkStyles)=>{
    const navs = navitems.map((item)=>{
        item = {...item, props:{...item["props"], style:{...item.props["style"], ...linkStyles}}}
        return <li key={uuid()}>{item}</li>
    });
    return navs;
}

const NavItem = ({navitems, linkStyles})=>{
    return(
        <React.Fragment>{renderNavItems(navitems, linkStyles)} </React.Fragment>
    )
}

export default NavItem;
