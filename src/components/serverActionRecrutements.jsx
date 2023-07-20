"use client"
import axios from '@/axios/axios';
import React, { FormEvent, useState } from 'react';
function ServerActionRecrutements() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        cv: '', // Add a file property to hold the uploaded file
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleFormSubmit = async (event) => {
        // server action in futur
        // "use server";
        event.preventDefault(); // Prevent default form submission
        // const isValid = validateForm();
        // if (!isValid) return alert('null');
        // change the cv to be buffer and then send it to the api with other form data
        // const res = await axios.post('api/recrutements', formData);
        // const base64String = btoa(String.fromCharCode(...new Uint8Array(formData.cv)));
        // console.log();
       

        window.open(formData.cv, "_blank")
        // let reader = new FileReader();
        // reader.readAsText(formData.cv);
        // reader.onload = function () {
        //     console.log(reader.result);
        // };

        // reader.onerror = function () {
        //     console.log(reader.error);
        // };
        // console.log(res.data);


    };

    const handleChange = (event) => {
        const { name, value, type } = event.target;
        if (type !== 'file') {
            setFormData({
                ...formData,
                [name]: value,
            });
        } else {
            // Handle the file input separately
            const fileInput = event.target;
            const file = fileInput.files && fileInput.files.length > 0 ? fileInput.files[0] : null;

            if (file) {
                var newFile = new Blob([file], { type: file.type });
                var fileURL = URL.createObjectURL(newFile);
                setFormData({
                    ...formData,
                    [name]: fileURL,
                });
              
            }
        }
        // Clear the error message for the field when the user starts typing again
        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        };

        // Add your validation rules here
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
            isValid = false;
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
            isValid = false;
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };


    return (
        <form onSubmit={handleFormSubmit} encType='multipart/form-data'>
            <div className='flex flex-col md:flex-row gap-4 px-8'>
                <div className="w-full">
                    <label className="text-sm font-medium ">Nom et Prénom</label>
                    <input
                        value={formData.name}
                        onChange={handleChange}

                        className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="text" name="name" />
                </div>
                <div className="w-full">
                    <label className="text-sm font-medium ">Email</label>
                    <input
                        value={formData.email}
                        onChange={handleChange}
                        className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="email" name="email" />
                </div>
                <div className="w-full">
                    <label className="text-sm font-medium ">N° de Téléphone</label>
                    <input
                        value={formData.phone}
                        onChange={handleChange}
                        className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="text" name="phone" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 px-8 pb-8">
                <div className="col-span-1 mt-3">
                    <label className="text-xs font-semibold">Matière</label>
                    <input
                        value={formData.subject}
                        onChange={handleChange}
                        className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="text" name="subject" />
                </div>
                <div className="col-span-1 mt-3">
                    <label className="text-xs font-semibold">CV</label>
                    <input
                        onChange={handleChange}
                        className="flex items-center h-10 mt-1 rounded py-2 w-full text-sm"
                        type="file" name="cv" />
                </div>
                <div className="col-span-2">
                    <label className="text-xs font-semibold" >Message</label>
                    <textarea
                        value={formData.message}
                        onChange={handleChange}
                        className="flex items-center border mt-1 rounded p-4 min-w-full h-28 text-sm" placeholder="Votre Message Ici" name="message">
                    </textarea>
                </div>
                <div className='flex col-span-2'>
                    <button type='submit' className='w-full py-3 text-white rounded-sm font-semibold text-xl bg-dorange'>
                        Envoyer
                    </button>
                </div>
            </div>
        </form>
    );
}

export default ServerActionRecrutements;
