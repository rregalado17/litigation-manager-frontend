import React from 'react';
import { NavLink } from 'react-router-dom';


const link = {
  width: '100px',
  padding: '8px',
  margin: '0 6px 6px',
  background: 'black',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{
          background: 'gray'
        }}
      >Home</NavLink>
      <NavLink
      to="/lawyers"
      exact 
      style={link}
      activeStyle={{
        background: 'gray'
      }}>Lawyers</NavLink>
    <NavLink
      to="/lawyers/new"
      exact 
      style={link}
      activeStyle={{
        background: 'gray'
      }}>New Lawyer</NavLink>
    <NavLink
      to="/lawyers/litigations"
      exact 
      style={link}
      activeStyle={{
        background: 'gray'
      }}>Litigations</NavLink>
    </div>
  );
};

export default NavBar;