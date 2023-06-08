import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddData } from '../services/api';
import { BackBtn } from '../Componentes/Buttons';
import VerifyCheck from './Auth/VerifyCheck';

export default function AddPet() {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        petname: '',
        breed: '',
        petprice: '',
        age: '',
        petimg: '',
    });

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
            await AddData(product);
            alert('Pet added!');
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='dashboard-content'>
            <VerifyCheck/>
            <div className='cardx form-data-align'>
                <form onSubmit={handleSubmit} className='form-data-card '>
                    <input type='text' placeholder='Pet Name' name='petname' value={product.petname} onChange={handleInputChange} className='product-input' required/>
                    <input type='text' placeholder='Breed' name='breed' value={product.breed} onChange={handleInputChange} className='product-input' required />
                    <input type='number' placeholder='Pet Price' name='petprice' value={product.petprice} onChange={handleInputChange} className='product-input' required />
                    <input type='number' placeholder='Age' name='age' value={product.age} onChange={handleInputChange} className='product-input' required />
                    <input type='text' placeholder='Pet img URL' name='petimg' value={product.petimg} onChange={handleInputChange} className='product-input' required />
                    <button type='submit' className='button2'>Add Pet</button>
                </form>
            </div>
            <BackBtn />
        </div>
    );
}
