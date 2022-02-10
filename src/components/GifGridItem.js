import React from 'react';
import PropTypes from 'prop-types'; //impt

//import '../index.css';

export const GifGridItem = ({title,url}) => {

    return (
        <div className='card animate__animated animate__fadeInDown'>
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
        );
};

GifGridItem.protoType={
    title:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired
}
