import React from 'react';
import Iconbar from './Iconbar'
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import RefreshIcon from '@material-ui/icons/Refresh';

export default function Header() {



  return(
     <>
     <div className="header">
     <MenuIcon className="menu-icon"/>

     <img src="https://i.ibb.co/MNwJV0R/Google-Keep-icon-2015-2020-svg.png" alt="logo icon" className="logo"/>
      <h1>  Keep  </h1>
    
     <input type="search" placeholder="Search here...." className="searchbar"/>
    
    <RefreshIcon  className="icons"/>
    <ViewStreamIcon className="icons"/>
    <SettingsIcon className="icons"/>
    <AppsIcon className="icons" />
    <AccountCircleIcon className="icons " /> 
     </div>

     </>
  );

}