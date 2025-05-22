import React, { useState, useEffect } from 'react';
import { getIndexMessage } from '../services/restaurantExplorerApiService';

const RestaurantExplorerComponent = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const data = await getIndexMessage();
                setMessage(data);
            } catch (error) {
                console.error('Error fetching message:', error);
            }
        };
        fetchMessage();
    }, []);

    return (
        <div>
            <h1>Restaurant Explorer</h1>
            <p>{message}</p>
        </div>
    ); 
}
export default RestaurantExplorerComponent;