import React from 'react';
import pumaModel1 from '../../assets/puma/puma1.jpg'
import pumaModel2 from '../../assets/puma/puma2.jpg'
import pumaModel3 from '../../assets/puma/puma3.jpg'
import { Link } from 'react-router-dom';

export type PumaItem = {
    id: string;
    model: string;
    collection: string;
    price: string;
    picture: string;
}

export const pumaArr: PumaItem[] = [
    {
        id: "1",
        model: 'PUMA RS-X³',
        collection: 'new collection1',
        price: '120200$',
        picture: pumaModel1,
    },
    {
        id: "2",
        model: 'PUMA Suede Classic',
        collection: 'new collection22',
        price: '220300$',
        picture: pumaModel2
    },
    {
        id: "3",
        model: 'PUMA Future Rider',
        collection: 'new collection333',
        price: '320400$',
        picture: pumaModel3
    }
]


export const PageTwo = () => {
    return (
        <div
            style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}
        >
            <h2>Puma Sneakers</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                {pumaArr.map((sneaker, i) => {
                    return (
                        <Link key={i} to={`/puma/${sneaker.id}`}>
                            <img
                                style={{ width: '200px', height: 'auto' }}
                                src={sneaker.picture}
                                alt={sneaker.model}
                            />
                        </Link>
                    )
                })}
            </div>
            <p>
                Step into the world of Puma, where cutting-edge design meets unmatched comfort. Puma sneakers are crafted to provide superior support and durability, making them perfect for everyday wear and athletic activities. Explore our collection and find the perfect pair to elevate your footwear game.
            </p>
        </div>
    );
};

