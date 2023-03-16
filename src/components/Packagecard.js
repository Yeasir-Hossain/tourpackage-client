import Image from 'next/image';
import React from 'react';

const Packagecard = ({ packageitem }) => {
    return (
        <div className="card bg-base-100 bg-opacity-50 shadow-2xl font-medium relative">
            <figure className='h-1/2'><img className='h-full w-full' src={packageitem?.image} alt={packageitem?.packagename} /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl text-blue-600 font-bold">{packageitem.packagename}</h2>
                <div className='grid grid-cols-2'>
                    <p>For: {packageitem?.numberofperson} Person(s)</p>
                    <p className='ml-auto'>Place: {packageitem?.place}</p>
                    <p>Price: {packageitem?.price} INR</p>
                </div>
                <p>Duration: {packageitem?.duration}</p>
                <p>{packageitem?.description}</p>
                <div className="card-actions">
                    <button className="btn btn-primary w-full">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Packagecard;