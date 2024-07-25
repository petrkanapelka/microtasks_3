import * as React from 'react';
import { useParams } from 'react-router-dom';

export type Item = {
    id: string;
    model: string;
    collection: string;
    price: string;
    picture: string;
}

type ModelProps = {
    items: Item[];
}

export const Model: React.FC<ModelProps> = ({ items }) => {
    let params = useParams();
    let item = items.find((el) => el.id === params.id);

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
