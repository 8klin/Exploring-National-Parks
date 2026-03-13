import React from 'react';
import data from './data';
import './locationsPage.css';

function TempleLocationsPage() {
    return (
        <div>
            {data.map((item, index) => (
                <div key={index} className="location">
                    <img src={item.image} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}
export default TempleLocationsPage;