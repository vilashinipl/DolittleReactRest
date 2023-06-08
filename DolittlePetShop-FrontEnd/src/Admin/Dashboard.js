import React, { useState, useEffect } from 'react';
import { GetData, DeleteData } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { AddBtn, HomeBtn, LogoutBtn } from '../Componentes/Buttons';
import VerifyCheck from './Auth/VerifyCheck';

export default function Dashboard() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await GetData();
            setProducts(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (productId) => {
        try {
            await DeleteData(productId);
            alert('Pet Deleted !');
            fetchProducts();
        } catch (error) {
            console.error(error);
        }
    };

    const handleEdit = (productId) => {
        navigate(`/Dashboard/edit/${productId}`);
    };

    return (
        <div className='backgroundgradDash'>
            <VerifyCheck/>
            <div className='dashboard-content'>
                <table className='table-container card-square-0'>
                    <thead>
                        <tr>
                            <th>
                                <h1>Pet</h1>
                            </th>
                            <th>
                                <h1>Breed</h1>
                            </th>
                            <th>
                                <h1>Price</h1>
                            </th>
                            <th>
                                <h1>Age</h1>
                            </th>
                            <th>
                                <h1>Operations</h1>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.pid}>
                                <td className='table-data'>{product.petname}</td>
                                <td className='table-data'>{product.breed}</td>
                                <td className='table-data'>{product.petprice}</td>
                                <td className='table-data'>{product.age}</td>
                                <td className='table-actions form-btn-container'>
                                    <button onClick={() => handleEdit(product.pid)} className='form-btn-x form-edit-btn'>
                                    <span className="material-symbols-outlined ico-x">Edit</span>
                                    </button>
                                    <button onClick={() => handleDelete(product.pid)} className='form-btn-x form-delete-btn'>
                                    <span className="material-symbols-outlined ico-x">Delete</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <AddBtn />
            <LogoutBtn />
            <HomeBtn />
        </div>
    );
}
