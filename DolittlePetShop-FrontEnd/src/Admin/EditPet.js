import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EditData, FindData } from '../services/api';
import { BackBtn } from '../Componentes/Buttons';
import VerifyCheck from './Auth/VerifyCheck';

export default function EditPet() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        petname: '',
        breed: '',
        petprice: '',
        age: '',
        petimg: '',
    });

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const response = await FindData(productId);
            setProduct(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await EditData(productId, product);
            alert('Pet Updated !');
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='dashboard-content'>
            <VerifyCheck/>
            <div className='cardx form-data-align'>
                <form onSubmit={handleSubmit} className='form-data-card'>
                    <label>Pet Name</label>
                    <input type='text' placeholder='Pet Name' name='petname' value={product.petname} onChange={handleInputChange} className='product-input' required />
                    <label>Breed</label>
                    <input type='text' placeholder='Breed' name='breed' value={product.breed} onChange={handleInputChange} className='product-input' required />
                    <label>Pet Price</label>
                    <input type='number' placeholder='Price' name='petprice' value={product.petprice} onChange={handleInputChange} className='product-input' required />
                    <label>Age</label>
                    <input type='number' placeholder='Age' name='age' value={product.age} onChange={handleInputChange} className='product-input' required />
                    <label>Pet Image URL</label>
                    <input type='text' placeholder='Pet img URL' name='petimg' value={product.petimg} onChange={handleInputChange} className='product-input' required />
                    <button type='submit' className='button2'>Update Product</button>
                </form>
            </div>
            <BackBtn />
        </div>
    );
}
