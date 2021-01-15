import React from 'react'
import myCSS from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { HeaderHOCPropsType } from './HeaderContainer'
import { Header } from 'antd/lib/layout/layout'
import { Menu } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import { UserOutlined } from '@ant-design/icons'

const AppHeader: React.FC<HeaderHOCPropsType> = ({ auth: { login, isAuthed }, getLogout }) => {
    return (
        <Header className="header">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className={'logo ' + myCSS.logoText}>
                    React Social Network
            </div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}
                >
                    <Menu.Item key="1">
                        {isAuthed
                            ? <NavLink to='/profile'>
                                <Avatar style={{ marginRight: '1rem' }} icon={<UserOutlined />} />{login}
                            </NavLink>
                            : <NavLink to='/login'>Login</NavLink>}
                    </Menu.Item>
                    {isAuthed &&
                        <Menu.Item key="2">
                            <NavLink onClick={getLogout} to='/login'>Log Out</NavLink>
                        </Menu.Item>
                    }
                </Menu>
            </div>
        </Header>
    )
}

export default AppHeader