import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import axios from 'axios';
import Card from './ProductCard';
import { ElectronicsUrl, GirlsClothingUrl, BoysClothingUrl} from './url';

const Home = () => {

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
           <Container className="container py-4 mb-4">
               <div className="">
                   <h3 className="text-center"><b> Electronics </b></h3>
                   <hr className="w-25 mx-auto " />
                   <div className="row mx-auto">
                       {
                          products.map( (Product, Indx) => {
                              return <Card key={Indx} url={ElectronicsUrl} name={Product.name} price={Product.price} cat={Product.cat} cmp={Product.cmp} id={Product.id} />
                          })
                       }
                   </div>
               </div>

               <div className="mt-5">
                   <h3 className="text-center"><b> Girl's Clothing </b></h3>
                   <hr className="w-25 mx-auto " />
                   <div className="row mx-auto">
                       {
                          products.map( (Product, Indx) => {
                              return <Card key={Indx} url={GirlsClothingUrl} name={Product.name} price={Product.price} cat={Product.cat} cmp={Product.cmp} />
                          })
                       }
                   </div>
               </div>

               <div className="mt-5">
                   <h3 className="text-center"><b> Boys's Clothing </b></h3>
                   <hr className="w-25 mx-auto " />
                   <div className="row mx-auto">
                       {
                          products.map( (Product, Indx) => {
                              return <Card key={Indx} url={BoysClothingUrl} name={Product.name} price={Product.price} cat={Product.cat} cmp={Product.cmp} />
                          })
                       }
                   </div>
               </div>
               
           </Container>
        </>
    )
}

export default Home;
