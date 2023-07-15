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
                className="bg-white mx-auto rounded-full p-3 w-20 flex justify-center items-center"
            >
                <i className="fa-regular fa-circle-play text-6xl text-dorange"></i>
            </button>
            <Modal
                footer={null}
                title="Institut Eugene Delacroix"
                open={isModalOpen} 
                onCancel={handleCancel}
            >
                <iframe
                    src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FINSTITUTEUGENEDELACROIX%2Fvideos%2F298275322002695%2F&show_text=false&width=560&t=0"
                    width="100%"
                    height="200"
                    style={{ border: 'none', overflow: 'hidden' }}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </Modal>
        </>
    );
};

export default ModalView;
