import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Card from './ProductCard';
let url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-sbHUKY7dOAoXlb--mgqslAOf3eBFiwSy3kMnqU-ts3Ohw4-E08O9AEHYlMn5k9qxY4&usqp=CAU';

const Products = () => {

    let [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        let res = await axios.get(`https://restapittt.herokuapp.com/products/`)
        // console.log(res.data);
        setProducts(res.data);
    }

    useEffect( () => {
        getAllProducts();
    })

    return (
        <>
            <Container className="container mt-4">
                <h2 className="text-center"> All Products </h2>
                <hr className="w-25 mx-auto" />
                <div className="row mx-auto">
                    {
                        products.map( (Product, Indx) => {
                            return <Card key={Indx} url={url} name={Product.name} price={Product.price} cat={Product.cat} cmp={Product.cmp} />
                        })
                    }
                </div>
            </Container>
        </>
    )
}

export default Products;
