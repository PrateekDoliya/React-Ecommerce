import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: transparent;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;

export const LogoContainer = styled.div`
    font-size: 35px;
    font-weight: bolder;
    font-family: 'EB Garamond, serif' !important;
    /* background-color: green; */
    /* padding: 0 20px; */
`;


export const NavMenu = styled.div` 
  display: flex;
  align-items: center;
  margin-right: -24px;
  .menu-item + .menu-item{
    margin-left: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const NavLink = styled(Link)`
  color: rgb(119, 119, 121);
  display: flex;
  font-size: 1.4rem;
  align-items: center;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  font-family: 'Mulish', sans-serif;
  font-weight: 100;
  transition: 0.5s;

 
`;


export const NavLogin = styled.div` 
  display: flex;
  align-items: center;
  margin-right: -24px;
  .menu-item + .menu-item{
    margin-left: 1rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BarLogoContainer = styled.div`
    width: 15rem;
    /* display: none; */
    justify-content:space-evenly;
    align-items: center;
    @media screen and (max-width: 768px) {
      display: flex;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #000;
  font-size: 1.8rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Logger = styled.div`
  width: 50px;
  height: 50px;
  display: none;
  color: #000;
  font-size: 1.8rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const MobLoginContainer = styled.div`
  width: 100px;
  display: none;
  justify-content:space-around;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const LogoutContainer = styled.div`
  height: 2rem;
  width: 5rem;
  line-height: 2rem;
  background: #fff;
  position: absolute;
  display: none;
  padding:6px 0 0 15px;
  justify-content: center;
  align-items: center;
  right: 29px;
  top: 5rem;
  border-radius: 5px;
  border: 1px solid grey ;
  /* font-size: 20px; */
`;

export const LogoutContainer1 = styled.div`
  height: 2rem;
  width: 5rem;
  line-height: 2rem;
  background: #fff;
  position: absolute;
  display: none;
  padding:7px 0 0 15px;
  justify-content: center;
  align-items: center;
  right: 10px;
  top: 5rem;
  border-radius: 5px;
  border: 1px solid grey ;
  /* font-size: 20px; */
`;

