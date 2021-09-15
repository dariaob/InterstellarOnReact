import React from 'react'
import {  SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'


const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen ={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>
                        О фильме
                    </SidebarLink>
                    <SidebarRoute to='/actors'>
                        Актёры
                    </SidebarRoute>
                    <SidebarLink to='trailer' onClick={toggle}>
                        Трейлер
                    </SidebarLink>
                    <SidebarLink to='comments' onClick={toggle}>
                        Комментарии
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>Кнопка</SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
