import React from 'react';
import SortTable from "../Components/SortTable/SortTable";

const FirstPage = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>My page №1</h1>
            <h2>Mikhalchik Vladislav</h2>
            <h2>Current date: {new Date().toLocaleDateString()}</h2>
            <SortTable/>
        </div>
    );
};

export default FirstPage;