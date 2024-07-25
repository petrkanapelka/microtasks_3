import React from 'react';
import nikeModel1 from '../../assets/nike/nike1.png'
import nikeModel2 from '../../assets/nike/nike2.webp'
import nikeModel3 from '../../assets/nike/nike3.jpg'

export type NikeItem = {
    id: string;
    model: string;
    collection: string;
    price: string;
    picture: string;
}

export const nikeArr: NikeItem[] = [
    {
        id: "1",
        model: 'NIKE Air Max 270',
        collection: 'new collection1',
        price: '140200$',
        picture: nikeModel1,
    },
    {
        id: "2",
        model: 'NIKE Air Force 1',
        collection: 'new collection22',
        price: '240300$',
        picture: nikeModel2
    },
    {
        id: "3",
        model: 'NIKE React Infinity Run',
        collection: 'new collection333',
        price: '340400$',
        picture: nikeModel3
    }
]


export const PageThree = () => {
    return (
        <div>
            <h2>Nike Sneakers</h2>
            <p>
                Experience the pinnacle of performance and style with Nike sneakers. Renowned for their innovative features and iconic designs, Nike shoes are the choice of athletes and fashion enthusiasts alike. Whether you're hitting the gym or the streets, Nike has the perfect pair to match your lifestyle.
            </p>
        </div>
    );
};

