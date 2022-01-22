import React from 'react';
import { CartImg } from './url';
import { BiRupee } from "react-icons/bi";
import { BsTrashFill } from "react-icons/bs";
import { ItemInfo, ProductImg, ProductTitle, Quantity, Price, RemoveItem } from './CartElements';

const CartItem = ({ name, price, cmp, id }) => {

    

    return (
        <>
            <ItemInfo>
                <ProductImg>
                    <img 
                        src={CartImg}
                        alt="Product"
                    />    
                </ProductImg>

                <ProductTitle>
                    <h2>{ name }</h2>
                    <p> { cmp } </p>
                </ProductTitle>

                <Quantity>
                    <button>+</button>
                    <input type="text" placeholder="1" />
                    <button>-</button>
                </Quantity>

                <Price>
                    <h3><BiRupee/> {price}</h3>
                </Price>

                <RemoveItem>
                    <button><BsTrashFill /></button>
                </RemoveItem>
            </ItemInfo>
            <hr />
        </>
    )
}

export default CartItem;

