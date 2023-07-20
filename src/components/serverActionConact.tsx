"use client"
import axios from '@/axios/axios';
import React, { FormEvent, useState } from 'react';

function ServerActionConact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
        // server action in futur
        event.preventDefault(); // Prevent default form submission
        const isValid = validateForm();
        if (!isValid) return alert('null');

        const res = await axios.post('api/contact-form', formData);
        console.log(res.data);

    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // Clear the error message for the field when the user starts typing again
        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors: {
            name: string;
            email: string;
            phone: string;
            subject: string;
            message: string;
        } = {
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
        <form onSubmit={handleFormSubmit}>
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
                <div className="col-span-2 mt-3">
                    <label className="text-xs font-semibold">Subject</label>
                    <input
                        value={formData.subject}
                        onChange={handleChange}
                        className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="text" name="subject" />
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

export default ServerActionConact;
