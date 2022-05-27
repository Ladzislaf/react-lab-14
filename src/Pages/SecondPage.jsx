import React from 'react';
import Catalog from "../Components/Catalog";

const SecondPage = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>My page №2</h1>
            <h2>Buturlya Roman (broke boy)</h2>
            <h2>Current date: {new Date(Date.now()-86400000).toLocaleDateString()}</h2>
            <Catalog/>
        </div>
    );
};

export default SecondPage;