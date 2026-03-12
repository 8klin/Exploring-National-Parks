import React from 'react';
import data from './data';
import '../../../Style/parkInfo.css'; //Use style of parkInfo

function locationsPage() {
    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>
                    <img src={item.image} />
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}
export default locationsPage();