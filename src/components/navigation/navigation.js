import React from 'react';
import {Container, Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {Link, NavLink as RouterNavLink} from "react-router-dom";
// import NavLink as RouterNavLink from 'react-router-dom'

const Navigation = () => {
    return (
        <Navbar color="light" light expand="md">
            <Container>
                <NavbarBrand tag={Link} to='/' href="/">News</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to='/news/add'>Add new post</NavLink>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;