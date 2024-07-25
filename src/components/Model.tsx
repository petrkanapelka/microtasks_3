import * as React from 'react';
import { adidasArr } from './pages/Adidas';
import { useParams } from 'react-router-dom';

export const Model = () => {
    let params = useParams();
    console.log("🚀 ~ Model ~ params ➔", params);

    let sneaker = adidasArr.find((el) => el.id === params.id)

    return (
        sneaker
            ? <div
                style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <h3> {sneaker.model}</h3 >
                <img
                    style={{ width: '300px', height: 'auto' }}
                    src={sneaker.picture}
                    alt={sneaker.model}
                />
                <p>{sneaker.collection}</p>
                <p>{sneaker.price}</p>
            </div >
            : <div>
                <h3>Model was not found</h3>
            </div>
    );
};