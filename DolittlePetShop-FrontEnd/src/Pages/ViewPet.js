import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FindData } from '../services/api';
import { BackBtn } from '../Componentes/Buttons';

export default function ViewPet() {
    const { productId } = useParams();
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
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='product-view'>
            <div className='product-container-main cardx'>
                <div className='product-img-main card-container'>
                    <img src={product.petimg} alt='pet-image' className='product-cover' />
                </div>
                <div className='product-content-main'>
                    <h1 className='product-title'>{product.petname}</h1>
                    <h3 className='product-price'>Price: {product.petprice}</h3>
                    <h3 className='product-rating'>Age: {product.age}</h3>
                </div>
            </div>
            <BackBtn />
        </div>
    );
}
