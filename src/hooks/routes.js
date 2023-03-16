import auth from '@/firebase.config';
import { useRouter } from 'next/router';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../components/shared/Loading';

export const withPublic = (Component) => {
    return function WithPulic(props) {
        if (typeof window !== 'undefined') {
            const [user] = useAuthState(auth)
            const router = useRouter()
            if (user) {
                router.push('/Login')
                return <Loading />
            }
            return <Component user={user} {...props} />
        }

    }
};

export const withProtected = (Component) => {
    return function WithProtected(props) {
        if (typeof window !== 'undefined') {
            const [user] = useAuthState(auth)
            const router = useRouter()
            if (!user) {
                router.push('/Login')
                return <Loading />
            }
            return <Component user={user} {...props} />
        }

    }
}