import React from 'react';
import Search from "../Components/Search";

const ThirdPage = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>My page №3</h1>
            <h2>Mazko Maxim</h2>
            <h2>Current date: {new Date(Date.now()+86400000).toLocaleDateString()}</h2>
            <Search/>
        </div>
    );
};

export default ThirdPage;