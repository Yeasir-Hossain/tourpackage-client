import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Form from './components/Form';


const imgStorageKey = 'd7274c5a1d7d29e08b6cec27d3e2d1a0'

const Create = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async data => {
        const image = data.image[0]
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`
        const formData = new FormData();
        formData.append('image', image);
        // sending image to imgbb 
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(result => {
                // sending data to mongodb 
                if (result.success) {
                    const image = result.data.url
                    const packagedata = {
                        packagename: data?.packagename,
                        numberofperson: data?.numberofperson,
                        place: data?.place,
                        duration: data?.duration,
                        description: data?.description,
                        image: image
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
                                toast("Added Successfully", {
                                    theme: "dark",
                                })
                                reset()
                            }
                            // for upload to mongodb error 
                            else {
                                toast.error('Failed to add', {
                                    theme: "dark",
                                });
                            }

                        })
                }
                // for image error 
                else {
                    toast.error('Failed to add', {
                        theme: "dark",
                    });
                }
            })
    }


    return (
        <div className='max-w-[1500px] mx-auto px-3 pt-10'>
            <div className="max-w-[700px] mx-auto px-2 py-2 flex flex-col justify-center bg-gray-100 bg-opacity-10 shadow-2xl items-center rounded-xl">
                <h1 className='font-bold text-2xl'>
                    Create Tour Package
                </h1>
                <Form handleSubmit={handleSubmit} register={register} onSubmit={onSubmit}></Form>
            </div>
        </div>
    );
};

export default Create;