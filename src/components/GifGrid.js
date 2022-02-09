import React, { useState, useEffect } from 'react';
import { useFecthGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

    const {data:images,lodading} = useFecthGifs(category);

    return (
        <>
             <h3>{category}</h3>
           {/* el operador && sirve para no hacer un ternario no evalua el false */}
           {lodading && <p>Loading</p>} 
            <div className='card-grid'>
                {
                    images.map((item) => {
                        return <GifGridItem key={item.id} {...item} />
                    })
                }
            </div>
        </>
    );
};
