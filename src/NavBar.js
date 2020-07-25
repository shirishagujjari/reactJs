import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, InputGroup, InputGroupAddon, InputGroupText, Input, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown
} from 'reactstrap';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle1 = () => setDropdownOpen(prevState => !prevState);

    return (
        <div>
            <Navbar color="dark" light>
                <NavbarToggler onClick={toggle} className="mr-2" />
                <NavbarBrand href="/" className="mr-auto">ZOLO</NavbarBrand>
                <Nav>
                    <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    All
                                </DropdownToggle>
                                <DropdownMenu left>
                                    <DropdownItem header>All Categories</DropdownItem>
                                    <DropdownItem>Books</DropdownItem>
                                    <DropdownItem>Baby</DropdownItem>
                                    <DropdownItem>Beauty</DropdownItem>
                                    <DropdownItem>Clothing & Accesories</DropdownItem>
                                    <DropdownItem>Computers & Accesories</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                        </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="search" />
                </InputGroup>
                </Nav>
            </Navbar>
            <Navbar color="secondary" light expand="md">
                <NavbarBrand href="/" className="mr-auto">Hello select your items</NavbarBrand>
                <NavbarToggler onClick={toggle} className="mr-2" />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Home & Kichen</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">WomenClothes</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">MenClothes</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Books</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Gift Items</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Computers</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Kids Toys</NavLink>
                        </NavItem>
                    </Nav>

                </Collapse>
            </Navbar>
        </div>
    );

}

export default NavBar;