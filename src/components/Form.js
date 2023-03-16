import React from 'react';

const Form = ({ handleSubmit, register, onSubmit }) => {
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-full px-3'>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text font-medium">Package Name</span>
                </label>
                <input
                    type="text"
                    placeholder='Package'
                    className="input input-bordered w-full bg-transparent placeholder:text-black"
                    {...register("packagename")}
                    required
                />
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text font-medium">Number of Person</span>
                </label>
                <input
                    type="number"
                    placeholder='Number of person(s)'
                    className="input input-bordered w-full bg-transparent placeholder:text-black"
                    {...register("numberofperson")}
                    required
                />
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text font-medium">Price</span>
                </label>
                <input
                    type="number"
                    placeholder='INR'
                    className="input input-bordered w-full bg-transparent placeholder:text-black"
                    {...register("price")}
                    required
                />
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text font-medium">Place</span>
                </label>
                <input
                    type="text"
                    placeholder='Place'
                    className="input input-bordered w-full bg-transparent placeholder:text-black"
                    {...register("place")}
                    required
                />
            </div>

            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text font-medium">Duration</span>
                </label>
                <input
                    type="text"
                    placeholder='How many night and day?'
                    className="input input-bordered w-full bg-transparent placeholder:text-black"
                    {...register("duration")}
                    required
                />
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text font-medium">Description</span>
                </label>
                <input
                    type="text"
                    placeholder='Description'
                    className="input input-bordered w-full bg-transparent placeholder:text-black"
                    {...register("description")}
                    required
                />

            </div>
            <div className="form-control w-full mt-4">
                <input
                    type="file"
                    placeholder='choose image'
                    className="file-input file-input-primary w-full bg-transparent placeholder:text-black"
                    {...register("image")}
                    required
                />

            </div>
            <input className='btn btn-primary w-full my-5' type="submit" value="Submit" />
        </form>
    );
};

export default Form;