"use client"
import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import { useEffect, useState } from "react";

const query = groq`
  *[_type == 'valeurs']
  {
    _id,
    title,
    description,
    "color": {
      "hex": color.hex
    }
  } | order(_createdAt)
`;

interface Valeur {
    _id: string;
    title: string;
    description: string;
    color: { hex: string };
}

const Valeurs = () => {
    const [valeurs, setValeurs] = useState([]);
    useEffect(() => {
        const fetcher = async () => {
            const data = await client.fetch(query);
            if (data) {
                setValeurs(data);
            }
        }
        fetcher()
    }, [])



    return (
        <>
            {valeurs.map((valeur: Valeur) => (
                <div key={valeur._id} className="flex gap-2 items-center mb-5">
                    <div
                        style={{ background: `${valeur.color.hex}` }}
                        className={`px-6 w-20 h-20 rounded-full flex justify-center items-center`}
                    >
                        <i className="text-white fa-solid fa-wand-magic-sparkles text-3xl"></i>
                    </div>
                    <div>
                        <h3 className="mt-0 font-semibold text-lg">{valeur.title}</h3>
                        <p>{valeur.description}</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Valeurs;
