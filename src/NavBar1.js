import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';

const NavBar1 = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/" className="mr-auto">Zolo Home</NavbarBrand>
                <NavbarToggler onClick={toggle} className="mr-2" />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Home Furnishing</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Home Appliances</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Furniture</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Home Decor</NavLink>
                        </NavItem>
                    </Nav>

                </Collapse>
            </Navbar>
        </div>
    );

}

export default NavBar1;