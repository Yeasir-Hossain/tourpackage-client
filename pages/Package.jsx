import React, { useEffect, useState } from 'react';
import Packagecard from '@/src/components/Packagecard';
import Loading from '@/src/components/shared/Loading';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '@/firebase.config';

const Package = () => {
    const [packages, setPackages] = useState(null)
    const [user] = useAuthState(auth)
    const router = useRouter()
    if (typeof window !== 'undefined' && !user) {
        router.push('/Login')
    }

    const [loading, setLoading] = useState(true)
    const loaddata = async () => {
        await fetch(`https://tour-package.onrender.com/package`).then(res => res.json()).then(data => {
            setPackages(data)
            setLoading(false)
        })
    }
    useEffect(() => {
        loaddata()
    }, [packages, loading])

    return (
        <div className='max-w-[1500px] mx-auto px-3 pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {
                loading ?
                    <Loading />
                    :
                    packages?.map(packageitem => <Packagecard key={packageitem?._id} packageitem={packageitem}></Packagecard>)
            }
        </div>
    );
};

export default Package;