import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../images/logo_.png'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import {selectCars} from "../features/Car/CarSlice"
import { useSelector } from 'react-redux'
function Header() {
  const [closeButton, setCloseButton] = useState(false);
  const cars = useSelector(selectCars)
  console.log(!closeButton);
  const closeMenu = () => {
    setCloseButton(prev => !prev)
   
  }
  
  const openMenu = () => {
    setCloseButton(prev => !prev);
    
  }
  return (
    <div className='header'>
      <Container>
        <Menu>
           { 
           cars.map((car,index) => (
              <a key={index} href='#'>{car}</a>
            ))}
        </Menu>
        <RightMenu>
            <a href='#'>Shop</a>
            <a href='#'>Account</a>
            <a href='#'>Menu</a>
        </RightMenu>
        <CustomMenu onClick={openMenu}>
            <AiOutlineMenu />
        </CustomMenu>
        {
          closeButton && 
        <BurgerNav show={closeButton}>
          <CustomClose>
              <div></div>
              <span onClick={closeMenu}>
                <AiOutlineClose />
              </span>
          </CustomClose>
          { 
           cars.map((car,index) => (
            <li><a href='#'>{car}</a></li>
            ))}
          <li><a href='#'>Used Inventory</a></li>
          <li><a href='#'>Trade-in</a></li>
          <li><a href='#'>Cybertruck</a></li>
          <li><a href='#'>Roadster</a></li>
          <li><a href='#'>Existing Inventory</a></li>
        
        </BurgerNav>
        }
        
      </Container>
    </div>
  )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    left:0;
    top:0;
    right:0;
    display : flex;
    align-items : center;
    justify-content : space-between;
    padding : 0 20px;
    background : transaparent;
    z-index : 10;
    @media (max-width : 768px){
        justify-content : flex-end;
       }

`

const Menu = styled.div`
   display : flex;
   align-items : center;
   gap : 1rem;
   flex: 1;
   justify-content: center;
   a{
    font-weight : 600;
    text-transform : uppercase;
    padding : 0 10px;
    flex-wrap : no-wrap;
    color : black;
   }

   @media (max-width : 768px){
    display : none;
   }
`

const RightMenu = styled.div`
   a{
    font-weight : 600;
    text-transform : uppercase;
    padding : 0 10px;
    flex-wrap : no-wrap;
    color : black;
   }
   @media (max-width : 768px){
    display : none;
   }
`

const CustomMenu = styled.div`
   cursor : pointer;

`

const BurgerNav = styled.div`
   position : fixed;
   top : 0;
   bottom : 0;
   right : 0;
   background : white;
   width : 200px;
   z-index : 100;
   list-style : none;
   padding : 20px;
   display : flex;
   flex-direction : column;
   text-align : start;
   transform : ${props => props.show ? 'translateX(0)' : 'translateX(100%)'}
   transition : transform 2s ease-in;

   li{
    padding : 15px 0;
    border-bottom : 1px solid rgba(0, 0, 0, 0.2);
    a{
      font-weight : 600; 
    }
   }
`

const CustomClose = styled.div`
   display : flex;
   justify-content : flex-end;

   div {
    flex : 1;
   }
   span{
    cursor : pointer;
   }

`