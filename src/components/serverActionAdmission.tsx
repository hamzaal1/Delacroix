import React from 'react'

function ServerActionAdmission() {
    return (
        <form action={''} className="">
            <div className='flex flex-col md:flex-row gap-4 px-8'>
                <div className="w-full">
                    <label className="text-sm font-medium ">Nom et Prénom</label>
                    <input className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="text" />
                </div>
                <div className="w-full">
                    <label className="text-sm font-medium ">Email</label>
                    <input className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="email" />
                </div>
                <div className="w-full">
                    <label className="text-sm font-medium ">N° de Téléphone</label>
                    <input className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="email" />
                </div>

            </div>
            <div className="grid grid-cols-2 gap-4 px-8 pb-8">
                <div className="col-span-2 mt-3">
                    <label className="text-xs font-semibold">Subject</label>
                    <input className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="text" />
                </div>

                <div className="col-span-2">
                    <label className="text-xs font-semibold" >Message</label>
                    <textarea className="flex items-center border mt-1 rounded p-4 min-w-full h-28 text-sm" placeholder="Votre Message Ici" >
                    </textarea>
                </div>
                <div className='flex col-span-2'>
                    <button className='w-full py-3 text-white rounded-sm font-semibold text-xl bg-dorange'>Envoyer</button>
                </div>
            </div>
        </form>
    )
}

export default ServerActionAdmission