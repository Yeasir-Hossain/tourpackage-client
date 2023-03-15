import React, { useEffect, useState } from 'react';
import Packagecard from './components/Packagecard';
import Loading from './components/shared/Loading';

const Package = () => {
    const [packages, setPackages] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:5000/package`).then(res => res.json()).then(data => {
            setPackages(data)
            setLoading(false)
        })
    }, [packages, loading])

    return (
        <div className='max-w-[1500px] mx-auto px-3 pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {
                loading ?
                    <Loading></Loading>
                    :
                    packages.map(packageitem => <Packagecard key={packageitem._id} packageitem={packageitem}></Packagecard>)
            }
        </div>
    );
};

export default Package;