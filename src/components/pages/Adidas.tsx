import React from 'react';
import adidasModel1 from '../../assets/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp';
import adidasModel2 from '../../assets/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp';
import adidasModel3 from '../../assets/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp';
import { Link } from 'react-router-dom';


export type AdidasItem = {
    id: string
    model: string;
    collection: string;
    price: string;
    picture: string;
}

export const adidasArr: AdidasItem[] = [
    {
        id: "1",
        model: 'ADIDAS ADIFOM TRXN',
        collection: 'new collection1',
        price: '100200$',
        picture: adidasModel1,

    },
    {
        id: "2",

        model: 'ADIDAS ADIFOM SUPER',
        collection: 'new collection22',
        price: '200300$',
        picture: adidasModel2
    },
    {
        id: "3",
        model: 'ADIDAS SUPER SUPERSKI',
        collection: 'new collection333',
        price: '300400$',
        picture: adidasModel3
    }
]

export const PageOne = () => {
    return (
        <div
            style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <h2>Adidas Sneakers</h2>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                {adidasArr.map((sneaker, i) => {
                    return (
                        <Link key={i} to={`/adidas/${sneaker.id}`}>
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
                Discover the latest Adidas sneakers designed for comfort and style. With innovative technology and sleek designs, Adidas offers the perfect balance between performance and fashion. Step up your game with a pair of Adidas sneakers, ideal for both athletic pursuits and casual wear.
            </p>
        </div>
    );
};



