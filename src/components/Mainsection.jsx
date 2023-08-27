'use client';
import { useEffect, useState } from "react";
import { urlForImage } from "../../sanity/lib/image";
import { groq } from "next-sanity";
import ModalView from "./modal";
import CMS from "./cms";
import { client } from "../../sanity/lib/client";

function Mainsection() {
    const [mainImage, setMainImage] = useState();

    const query = groq`
    *[_type == 'image_arrier']
    {
        mainImage
    }[0]
  `;
    useEffect(() => {
        const fetchContent = async () => {
            const image = await client.fetch(query);
            setMainImage(urlForImage(image.mainImage).url());
        }
        fetchContent();
    }, [])

    return (
        <section style={{ backgroundImage: `url(${mainImage})`, backgroundAttachment: 'fixed' }} className="about-section py-16 relative bg-stellar" id="section-counter">
            <div className="container mx-auto ">
                <div className="flex flex-wrap justify-center mb-5 pb-2 md:px-8">
                    <div className="order-last mt-5 md:mt-0 py-16 md:py-0 md:order-first pop-up w-full md:w-6/12 flex items-center bg-[url('/founded.png')] bg-center bg-cover rounded-md">
                        <div className="w-full md:w-8/12 mx-auto">
                            <ModalView />
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 text-center md:text-left md:px-3">
                        <h2 className="mb-4 text-white text-4xl font-bold"> <CMS id="b1d39be8-c207-48cc-9dc4-4d3e39db07af" />  </h2>
                        <p className="text-white font-semibold leading-8 ">
                            <CMS id="26837097-034c-4714-8e95-2ea4bd817666" />
                        </p>
                        <p className="text-white font-semibold leading-8 ">
                            <CMS id="1efef31a-20f2-48f5-8e29-4d24d961001b" />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Mainsection;