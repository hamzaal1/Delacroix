import React from 'react'
import Media from './media'
import ServerActionConact from './serverActionConact';
import ServerActionAdmission from './serverActionAdmission';
import ServerActionRecrutements from './serverActionRecrutements';

interface Props {
    title: string;
}

function ContactUs({ title }: Props) {
    return (
        <>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-full">
                <div className="lg:col-span-2">
                    <div className="bg-white rounded mt-4 shadow-lg">
                        {
                            title == "contact" ?
                                <ServerActionConact /> : title == 'admissions' ?
                                    <ServerActionAdmission /> : <ServerActionRecrutements />
                        }
                    </div>
                </div>
                <Media />
            </div>
        </>
    )
}

export default ContactUs