import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { MdDeleteOutline } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { Button, Label } from 'reactstrap';


const UpdationContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const CircleContainer = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 30px;
    color: #fff;
    font-size: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const Admin = () => {

    let [arrayData, setArrayData] = useState([]);
    let [addProduct, setAddProduct] = useState({
        name:'',
        price:0,
        cat:'',
        cmp:''
    });
    let [updateProduct, setUpdateProduct] = useState({
        name:'',
        price:0,
        cat:'',
        cmp:''
    });

    const getInitialProducts = async () => {
        let res = await axios.get(`https://restapittt.herokuapp.com/products/`);
        // console.log(res.data);
        setArrayData(res.data);
    }

    useEffect( () => {
        getInitialProducts();
    })

    const addProductEvent = (e) => {
        setAddProduct({...addProduct, [e.target.name]: e.target.value});
    }

    const submitAddProduct = async (e) => {
        e.preventDefault();
        let res = await axios.post(`https://restapittt.herokuapp.com/products/`, addProduct);
        // console.log(res);
        if(res.status === 201)
            alert(" Product Added Successfully ")
        setAddProduct({name:'',price:0,cat:'',cmp:''})
    }

    const DeleteProduct = async (id) => {
        let res = await axios.delete(`https://restapittt.herokuapp.com/products/${id}`)
        // console.log(res);
        if(res.status === 204 )
            alert(" Product Deleted Successfully ");
    }

    const UpdateProductEvent = (e) => {
        setUpdateProduct({...updateProduct, [e.target.name]: e.target.value})
    }

    const submitUpdateProduct = async (e) => {
        e.preventDefault();
        let res = await axios.put(`https://restapittt.herokuapp.com/products/${updateProduct.id}/`,updateProduct)
        // console.log(res);
        if(res.status === 200)
            alert(" Product Updated Successfully");
    }

    return (
        <>
            <div className="container">
                <table className="table table-bordered table-hover table-responsive text-center">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arrayData.map( (Item ) => {
                                return(
                                    <tr key={ Item.id }>
                                        <td> { Item.id } </td>
                                        <td> { Item.name } </td>
                                        <td> { Item.price } </td>
                                        <td> { Item.cat } </td>
                                        <td> { Item.cmp } </td>
                                        <td>
                                            <UpdationContainer>
                                                <CircleContainer className="bg-warning text-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={ () => { setUpdateProduct (Item) }}>
                                                    <BiEdit tooltip="Edit Product" />
                                                </CircleContainer>
                                                <CircleContainer tooltip className="bg-danger" onClick={ () => { DeleteProduct (Item.id)}}>
                                                    <MdDeleteOutline />
                                                </CircleContainer>
                                            </UpdationContainer>    
                                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                    <div className="modal-header">
        
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                    <form action="" onSubmit={ submitUpdateProduct }>
                                                        <div className="container">
                                                            <div className="form-group mt-3">
                                                                <Label>Product Name: </Label>
                                                                <input
                                                                    type="text"
                                                                    placeholder="Enter Product's Name"
                                                                    className="form-control"
                                                                    name="name"
                                                                    value={ updateProduct.name }
                                                                    onChange={ UpdateProductEvent }
                                                                />
                                                            </div>

                                                            <div className="form-group mt-3">
                                                                <Label>Product Price: </Label>
                                                                <input
                                                                    type="number"
                                                                    placeholder="Enter Product's Price"
                                                                    className="form-control"
                                                                    name="price"
                                                                    value={ updateProduct.price }
                                                                    onChange={ UpdateProductEvent }
                                                                />
                                                            </div>

                                                            <div className="form-group mt-3">
                                                                <Label>Product Category: </Label>
                                                                <input
                                                                    type="text"
                                                                    placeholder="Enter Product's Category'"
                                                                    className="form-control"
                                                                    name="cat"
                                                                    value={ updateProduct.cat }
                                                                    onChange={ UpdateProductEvent }
                                                                />
                                                            </div>

                                                            <div className="form-group mt-3">
                                                                <Label>Product Company: </Label>
                                                                <input
                                                                    type="text"
                                                                    placeholder="Enter Product's Company"
                                                                    className="form-control"
                                                                    name="cmp"
                                                                    value={ updateProduct.cmp }
                                                                    onChange={ UpdateProductEvent }
                                                                />
                                                            </div>
                                                        </div>
                                                    
                                                    <div className="modal-footer">
                                                        <Button type="button" color="secondary" data-bs-dismiss="modal">Close</Button>
                                                        <Button  color="primary" data-bs-dismiss="modal"> Update Product</Button>
                                                    </div>
                                                </form>
                                                </div>
                                                    </div>
                                                </div>
                                                </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

            <div className="bg-light mt-1 p-4">
                <h2 className="text-center">Add Products</h2>
                <hr className="w-25 mx-auto" />
                <form action="" onSubmit={ submitAddProduct }>
                    <div className="container">
                        <div className="form-group mt-3">
                            <Label>Product Name: </Label>
                            <input
                                type="text"
                                placeholder="Enter Product's Name"
                                className="form-control"
                                name="name"
                                value={ addProduct.name }
                                onChange={ addProductEvent }
                            />
                        </div>

                        <div className="form-group mt-3">
                            <Label>Product Price: </Label>
                            <input
                                type="number"
                                placeholder="Enter Product's Price"
                                className="form-control"
                                name="price"
                                value={ addProduct.price }
                                onChange={ addProductEvent }
                            />
                        </div>

                        <div className="form-group mt-3">
                            <Label>Product Category: </Label>
                            <input
                                type="text"
                                placeholder="Enter Product's Category'"
                                className="form-control"
                                name="cat"
                                value={ addProduct.cat }
                                onChange={ addProductEvent }
                            />
                        </div>

                        <div className="form-group mt-3">
                            <Label>Product Company: </Label>
                            <input
                                type="text"
                                placeholder="Enter Product's Company"
                                className="form-control"
                                name="cmp"
                                value={ addProduct.cmp }
                                onChange={ addProductEvent }
                            />
                        </div>

                        <div className="form-group mt-3">
                            <Button outline color="success"> Add Product </Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Admin;
