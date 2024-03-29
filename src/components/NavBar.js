import React from 'react';
import { NavLink } from 'react-router-dom';


const link = {
  width: '100px',
  padding: '8px',
  margin: '0 6px 6px',
  background: '#3b4754',
  textDecoration: 'none',
  color: '#f7f6f2',
  padding: '.5rem',
  borderRadius: '30px',
}

const NavBar = (  ) => {
  return (
    <div className="navbar">
      <NavLink
        className='link'
        to="/"
        exact style={link}
        activeStyle={{background: '#4b616c'}}
        >Home
      </NavLink>
      <NavLink
        to="/lawyers"
        exact style={link}
        activeStyle={{background: "#4b616c"}}
        >Lawyers
      </NavLink>
      {/* <NavBar
        className='link'
        to='/alllitigations'
        exact style={link}
        activeStyle={{background: "#4b616c"}}
        >All Litigations 
      </NavBar> */}
      <NavLink
        to="/lawyers/new"
        exact style={link}
        activeStyle={{background: '#4b616c'}}
        >New Lawyer
      </NavLink>
    </div>
  );
};

export default NavBar;