import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Create = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async data => {
        const packagedata = {
            packagename: data?.packagename,
            numberofperson: data?.numberofperson,
            place: data?.place,
            duration: data?.duration,
            description: data?.description
        }
        fetch(`http://localhost:5000/package`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(packagedata)
        })
            .then(res => res.json())
            .then(data => {
                if (data.result.acknowledged) {
                    toast("Updated Successfully", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                        theme: "dark",
                    })
                    reset()
                }

            })
    }


    return (
        <div className='max-w-[1500px] mx-auto px-3'>
            <div className='max-w-[700px] mx-auto px-2 py-2 flex flex-col justify-center items-center bg-slate-50 rounded-xl'>
                <h1 className='font bold text-xl'>
                    Create Tour Package
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full px-3'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Package Name</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            {...register("packagename")}
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Number of Person</span>
                        </label>
                        <input
                            type="number"
                            className="input input-bordered w-full"
                            {...register("numberofperson")}
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Place</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            {...register("place")}
                        />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Duration</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            {...register("duration")}
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            {...register("description")}
                        />

                    </div>
                    <input className='btn btn-primary w-full my-5' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Create;