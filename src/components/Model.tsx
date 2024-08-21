import * as React from 'react';
import { useParams } from 'react-router-dom';
import { adidasArr } from './pages/Adidas';
import { pumaArr } from './pages/Puma';
import { nikeArr } from './pages/Nike';

export type Item = {
    id: string;
    model: string;
    collection: string;
    price: string;
    picture: string;
}

type ProductionType = {
    [key: string]: Array<Item>
}

const production: ProductionType = {
    'adidas': adidasArr,
    'puma': pumaArr,
    'nike': nikeArr,
}

export const Model: React.FC = () => {
    let { model, id } = useParams();
    let item = model ? production[model].find((el) => el.id === id) : null;

    return (
        item
            ? <div
                style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <h3> {item.model}</h3 >
                <img
                    style={{ width: '300px', height: 'auto' }}
                    src={item.picture}
                    alt={item.model}
                />
                <p>{item.collection}</p>
                <p>{item.price}</p>
            </div >
            : <div>
                <h3>Model was not found</h3>
            </div>
    );
};
