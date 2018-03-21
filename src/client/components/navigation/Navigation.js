import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'
import './Navigation.scss';

class Navigation extends React.Component {
  render() {
    return (
      <div className='navigation'>
        <Nav className='container'>
          <NavItem>
            <NavLink><Link to='/'>Home</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink><Link to='/login'>Login</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink><Link to='/developer'>Developer</Link></NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Navigation;
