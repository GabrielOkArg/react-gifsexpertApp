import React, { useState } from 'react';
import PropTypes from 'prop-types';



export const AddCategory = ({setCategories}) => {
    const [inputValue, setinputValue] = useState('');

    const handleInputValue =(e)=>{
       setinputValue(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setCategories(cate => [inputValue,...cate]);
        setinputValue('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={handleInputValue}
                required
            />
        </form>
    );
   
};

AddCategory.protoType={
    setCategories: PropTypes.func.required
}
