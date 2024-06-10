import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Collapse, 
  Navbar as ReactstrapNavbar, 
  NavbarToggler, 
  NavbarBrand, 
  Nav, 
  NavItem, 
  NavLink 
} from 'reactstrap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <ReactstrapNavbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">MyApp</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/register">Register</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </ReactstrapNavbar>
    </div>
  );
};

export default Navbar;
