import React from 'react';
import '../css/Address.css';
import AddressText from '../conponts/AddressText';

const Address = () => {
    return (
        <div>
            <AddressText />
            <div className="addressBack"></div>
        </div>
    );
}

export default Address;