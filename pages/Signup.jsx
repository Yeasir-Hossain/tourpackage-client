import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '@/firebase.config';
import { useForm } from "react-hook-form";
import Link from 'next/link';
import { withPublic } from '../src/hooks/routes';
import Loading from '@/src/components/shared/Loading';

const Signup = () => {
    const [signInWithGoogle, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    let signInError;

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    if (error || gError || updateError) {
        signInError = <p className='text-red-600 font-bold'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    }
    return (
        <div className="max-w-[700px] mx-auto mt-20 px-2 py-2 flex flex-col justify-center bg-gray-100 bg-opacity-10 shadow-2xl items-center rounded-xl">
            <h2 className="text-center text-2xl font-bold">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full px-3'>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className='text-red-600 font-bold'>{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className='text-red-600 font-bold'>{errors.email.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered w-full"
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is Required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Must be 6 characters or longer'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className='text-red-600 font-bold'>{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className='text-red-600 font-bold'>{errors.password.message}</span>}
                    </label>
                </div>
                {signInError}
                <input className='btn w-full btn-primary text-white' type="submit" value="Sign Up" />
            </form>
            <p className='self-start ml-3'><small>Already have an account? <Link className='text-primary' href="/Login">Please login</Link></small></p>
            <div className="divider">OR</div>
            <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline"
            > <img className='p-2' src="/google.png" alt="" /> Continue with Google</button>
        </div>
    );
};

export default withPublic(Signup);