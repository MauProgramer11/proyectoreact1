import React from 'react';
import CarDetails from '../components/CarDetails';

const CarPage = ({ cars }) => {
    return (
        <div>
            <CarDetails cars={cars} />
        </div>
    );
};

export default CarPage;
