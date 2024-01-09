// Image.js

import React from 'react';
import Product  from './Product';

const Image = () => {
    return (
        <div>
        <img src={Product.image} alt={Product.name} style={{ maxWidth: '100%' }} />
        </div>
    );
};

export default Image;
