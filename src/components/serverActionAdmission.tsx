"use client"
import axios from '@/axios/axios';
import { Modal } from 'antd';
import React, { FormEvent, useState } from 'react';

function ServerActionAdmission() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [sending, setSending] = useState(false);
    const [modelMSG, setMSG] = useState({
        message: "",
        isOpen: false
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent default form submission
        let isvalide = validateForm();
        if (!isvalide) return;
        setSending(true)
        try {
            const res = await axios.post('api/admissions', formData);
            if (res.data.status == "ok") {
                setMSG({ message: "Message Envoyé Avec Succès", isOpen: true })
                setSending(false);
                setFormData({
                    name: '',
                    subject: '',
                    email: '',
                    phone: '',
                    message: '',
                });
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
            setSending(false);
        }

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
            newErrors.name = '*';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = '*';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
            isValid = false;
        }

        if (!formData.phone.trim()) {
            newErrors.phone = '*';
            isValid = false;
        }

        if (!formData.subject.trim()) {
            newErrors.subject = '*';
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = '*';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };


    return (
        <>
            {
                modelMSG.isOpen && <Modal
                    footer={null}
                    open={modelMSG.isOpen}
                    onCancel={() => setMSG({ message: "", isOpen: false })}
                    width={600}
                >
                    <div className='flex gap-5 py-3'>
                        <i className="fa-regular fa-circle-check text-green-600 text-4xl inline-block" />
                        <p className='text-2xl font-medium'>{modelMSG.message}</p>
                    </div>

                </Modal>

            }
            <form onSubmit={handleFormSubmit}>
                <div className='flex flex-col md:flex-row gap-4 px-8'>
                    <div className="w-full">
                        <label className="text-sm font-medium ">Nom et Prénom {errors.name && <span className='text-drose'>{errors.name}</span>}</label>
                        <input
                            value={formData.name}
                            onChange={handleChange}

                            className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="text" name="name" />
                    </div>
                    <div className="w-full">
                        <label className="text-sm font-medium ">Email {errors.email && <span className='text-drose'>{errors.email}</span>}</label>
                        <input
                            value={formData.email}
                            onChange={handleChange}
                            className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="email" name="email" />
                    </div>
                    <div className="w-full">
                        <label className="text-sm font-medium ">N° de Téléphone {errors.phone && <span className='text-drose'>{errors.phone}</span>}</label>
                        <input
                            value={formData.phone}
                            onChange={handleChange}
                            className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="text" name="phone" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 px-8 pb-8">
                    <div className="col-span-2 mt-3">
                        <label className="text-xs font-semibold">Subject {errors.subject && <span className='text-drose'>{errors.subject}</span>}</label>
                        <input
                            value={formData.subject}
                            onChange={handleChange}
                            className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="text" name="subject" />
                    </div>
                    <div className="col-span-2">
                        <label className="text-xs font-semibold" >Message {errors.message && <span className='text-drose'>{errors.message}</span>}</label>
                        <textarea
                            value={formData.message}
                            onChange={handleChange}
                            className="flex items-center border mt-1 rounded p-4 min-w-full h-28 text-sm" placeholder="Votre Message Ici" name="message">
                        </textarea>
                    </div>
                    <div className='flex col-span-2'>
                        <button type='submit' className='w-full py-3 text-white rounded-sm font-semibold text-xl bg-dorange'>
                            {
                                sending ? <div
                                    className="text-white inline-block h-10 w-10 animate-spin rounded-full border-[5px] border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                    role="status">
                                    <span
                                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                    >Loading...</span>
                                </div> : <>Envoyer</>
                            }
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default ServerActionAdmission;
