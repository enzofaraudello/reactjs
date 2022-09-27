import React from 'react';
import './Navbar.css'
import {Menu, MenuButton, MenuList, Portal, IconButton, MenuItem} from '@chakra-ui/react'

import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<noandaaaaa/>}
                variant='outline'
            />
                <Portal>
                    <MenuList>
                        <Link to="/categoria/vehiculo"><MenuItem>Vehiculo</MenuItem></Link>
                        <Link to="/categoria/bienes"><MenuItem>Bienes</MenuItem></Link>
                        <Link to="/categoria/servicios"><MenuItem>Servicios</MenuItem></Link>
                        <Link to="/categoria/inmuebles"><MenuItem>Inmuebles</MenuItem></Link>
                    </MenuList>
                </Portal>
            </Menu>
        </div>
    )
}

export default Navbar;