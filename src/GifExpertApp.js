import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Dragon ball']);

    const handleAdd = async () => {
        //Formas de modificar el estado agregando un nuevo elemento en un array
        // setcategories([...categories,'Dragon Ball GT']);
        setcategories(cate => [...cate, 'asd']);
    }

    return (

        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setcategories}  />
            <hr />

            <ul>
                {
                    categories.map((item, i) => {
                        return <GifGrid key={item} category={item}/>
                    })
                }
            </ul>
        </>

    );
};
