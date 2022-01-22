import React from 'react';
import { useHistory } from 'react-router';
import { FaArrowLeft } from "react-icons/fa";
import { FiShoppingCart } from 'react-icons/fi';
import styled from 'styled-components';
import CartItem from './CartItem';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { CartTotalContainer } from './CartElements';
import { BiRupee } from "react-icons/bi";


const Cart = () => {

   
    
    let history = useHistory();
    const cartItem = []

    
    
    const continueShopping = () => {
        history.goBack();
    }


    const ItemMainContainer = styled.div`
    width: 100%;
    height: 60vh;
    background: linear-gradient(
        103.49deg,
        #ffffff -28.13%,
        rgba(242, 247, 255, 0.5) 116.84%
    );
    box-shadow: rgba(0, 0, 0, 0.08) 0rem 0.4rem 1.2rem;
    border-radius: 2rem;
    margin: auto;
    margin: auto;
    display: grid;
    place-items: center;
    @media(max-width:768px)
    {
        height: 80vh;
        /* padding: 2rem 1rem; */
    }
`;

    const ItemsContainer = styled.div`
        width: 100%;
        height: 54vh;
        @media(max-width:768px)
        {
            height: 75vh;
            /* padding: 2rem 1rem; */
        }
    `;

    return (
        <>
            <div className="container px-5 pt-4  " >
                <div className="d-flex justify-content-between" >
                    <h5 style={{ cursor:'pointer'}} onClick={ continueShopping }> 
                        <FaArrowLeft />&nbsp; Continue Shopping 
                    </h5>
                    <h4 style={{ cursor:'pointer'}} ><FiShoppingCart /></h4>
                </div>
                <hr  />
            </div>

            <div className="container px-5">
            <section className=" ">
                {/* <h2> Shopping Cart </h2> */}
                <p>You Have <span className="fw-bold"> 7 </span> Items In Shopping Cart</p>
                <ItemMainContainer className="py-3 mt-3 px-5">
                    <ItemsContainer>
                    <Scrollbars>
                        
                        {
                            cartItem.map( (curItem) => {
            
                                return <CartItem key = { curItem.id } id={curItem.id}  name={curItem.name} price = {curItem.price} cmp = {curItem.cmp}  />
                            })
                        }
                        
                    </Scrollbars>
                    </ItemsContainer>
                </ItemMainContainer>
                <CartTotalContainer className="px-5 b-danger">
                    <h6>Cart Total: &nbsp;<span><BiRupee />2200 </span></h6>
                </CartTotalContainer>
            </section>
            
            </div>
        </>
    )
}



export default Cart;



// <ItemMainContainer className="container py-3 px-5">
                    
//                     <Scrollbars>
                        
//                         <CartItem />
//                         <hr />

//                         <CartItem />
//                         <hr />

//                         <CartItem />
//                         <hr />

//                         <CartItem />
//                         <hr />
//                         <CartItem />
//                         <hr />
//                         <CartItem />
//                         <hr />
//                         <CartItem />
//                         <hr />
//                         <CartItem />
//                         <hr /><CartItem />
//                         <hr />
//                         <CartItem />
//                         <hr />
//                     </Scrollbars>
                    
//                 </ItemMainContainer>