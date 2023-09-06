"use client";
import React, { useState } from 'react';
import { Modal } from 'antd';

const ModalView: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
        window.document.body.style.overflow = 'hidden';
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        window.document.body.style.overflow = 'auto';
    };

    return (
        <>
            <button
                onClick={showModal}
                className="open-pop-up bg-white mx-auto rounded-full p-3 w-20 flex justify-center items-center"
            >
                <i className="fa-regular fa-circle-play text-6xl text-dorange"></i>
            </button>
            <Modal
                footer={null}
                title="Institut Eugene Delacroix"
                open={isModalOpen} 
                onCancel={handleCancel}
                width={800}
            >
                <video controls src={'/intro.mp4'}></video>
            </Modal>
        </>
    );
};

export default ModalView;
