import React from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnTheme} from './NavbarElements';
import {FaBars} from 'react-icons/fa'
const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'> Главная </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>О фильме</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/actors'>Актёры</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='trailer'>Трейлер</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='comments'>Комментарии</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnTheme>Сменить тему</NavBtnTheme>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
