import React from 'react';
import './feature.css';

interface FeautureProps {
    number: number;
    title: string;
    description: string;
}

export const Feauture = ({ number, title, description }: FeautureProps) => (
    <div className='feature'>
        <span className='number'> {number} </span>
        <h3 className='title'> {title} </h3>
        <p className='description'> {description} </p>
    </div>
);
