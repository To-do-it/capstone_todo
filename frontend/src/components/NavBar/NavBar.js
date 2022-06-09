import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import Axios from 'axios';

const MenuList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .ant-menu {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
`;

const LogoImg = styled.img`
  height: 100px;
  width: 100px;
`;

function NavBar() {

  const [auth, setAuth] = useState('')

  const menuItems = [
    {
      label: <Link to="/login">로그인</Link>,
      key: "signin",
    },
    {
      label: <Link to="/signup">회원가입</Link>,
      key: "signup",
    },
  ]

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setAuth(true);
    }
  }, [])

  const handleLogout = () => {
    let token = localStorage.getItem('token')

    Axios.post('/api/v1/todo/auth/logout/', token)
      .then(res => {
        localStorage.clear()
        window.location.replace('/')
      });
  };

  return(
    <div>
      <MenuList>
        <Link to="/"><LogoImg src={require('../logo.png')} alt='logo' /></Link>
      {
        auth ?
          <Menu onClick={handleLogout} items={[{label:"로그아웃",key:"logout"}]} mode="horizontal"/>
        :
          <Menu items={menuItems} mode="horizontal"/>
      }  
      </MenuList>
    </div>
  )
}

export default NavBar;


/*{ <Menu key="logout" onClick={handleLogout} items={'로그아웃'} />
        <Menu>
          { auth ?
            <Menu.Item key="logout" onClick={handleLogout}>
              로그아웃
            </Menu.Item>
            :
            <Menu.Item key="signin">
              <Link to="/login">
              로그인
              </Link>
            </Menu.Item>
          }
          { auth ?
            <></>
          :
            <Menu.Item key="signup">
              <Link to="/signup">
              회원가입
              </Link>
            </Menu.Item>
          }
        </Menu> }*/