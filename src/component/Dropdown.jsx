import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import { deepOrange } from '@mui/material/colors';
import { useSelector } from 'react-redux';
// import $ from 'jquery';
// import { useDispatch } from 'react-redux';
// import { LoginAction } from './action/Login';

const SiderBar = styled.div`
  background: #151418;
  position: fixed;
  height: 100%;
  width: 92%;
  /* top: 0; */
  top: 0;
  z-index: 999;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = styled(FaTimes)`
  font-size: 2rem;
  color: #fff;
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
`;
export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .menu-item + .menu-item {
    margin-top: 2rem;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  cursor: pointer;
  font-size: 1.7rem;
  font-family: 'EB Garamond', serif;
  transition: 0.5s;
  &:hover {
    color: red
  }
`;

export const NavBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  font-size: 1.7rem;
`;

// const AvtarContainer = styled.div`
//   height: 70px;
//   width: 70px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   /* background: red; */
//   position: absolute;
//   top: 15px;
//   left: 15px;
//   z-index: 1000;
//   border-radius: 40px;
// `;

// const LogoutContainer = styled.div`
//   height: 2rem;
//   width: 7rem;
//   line-height: 2rem;
//   background: #151418;
//   color: #fff;
//   position: absolute;
//   display: none;
//   padding:7px 0 0 0px;
//   justify-content: center;
//   align-items: center;
//   left: 0rem;
//   /* top: 2.5rem; */
//   /* font-size: 20px; */
// `;


function Dropdown({ isOpen, toggle }) {

  const initialState = useSelector( state => state.LoginReducer);
  // const dispatch = useDispatch();
  
  // const logout = () => {
  //   $("#logoutContainer").slideToggle();
  // }

  // const logOutID = () => {
  //   dispatch(LoginAction({name:null}))
  // }


  return (
    <SiderBar isOpen={isOpen} onClick={toggle}>
      <CloseIcon onClick={toggle} />
      <NavMenu>
        
        <NavLink onClick={toggle} className="menu-item" to="/" >
          Home
        </NavLink>

        <NavLink onClick={toggle} className="menu-item" to="/product" >
          Products
        </NavLink>

        <NavLink onClick={toggle} className="menu-item" to="/about" >
          About
        </NavLink>

        <NavLink onClick={toggle} className="menu-item" to="/contact">
          Contact
        </NavLink>

        {
          initialState ?
          null
          :
          <NavLink onClick={toggle} className="menu-item" to="/signIn">
          <FaUserAlt className="logBtns" />
            SignIn
        </NavLink>
        }
        

        <NavLink onClick={toggle} className="menu-item" to="/admin" >
          Admin
        </NavLink>

      </NavMenu>
      
    </SiderBar>
  );
}

export default Dropdown;