import React from 'react';
import { NavLink } from 'react-router-dom'
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav
} from 'reactstrap';

const navigationLinks = [
    {
        href: '/',
        name: 'Home'
    }, {
        href: '/signup',
        name: 'Sign Up'
    }, {
        href: '/login',
        name: 'Log In'
    }, {
        href: '/developer',
        name: 'Developer'
    }
]

class Navigation extends React.Component {
    state = {
        isOpen: false
    }
    
    render() {
        return (
            <Navbar style={{backgroundColor: 'royalblue'}} dark expand="sm">
                <NavbarBrand href="/">Navigation</NavbarBrand>
                <NavbarToggler onClick={() => this.setState({ isOpen: !this.state.isOpen})} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {navigationLinks.map((link, index) => (
                            <NavLink key={index} exact className='nav-link' to={link.href}>{link.name}</NavLink>
                        ))}
                    </Nav>
                </Collapse>
            </Navbar>
        )
  }
}

export default Navigation;
