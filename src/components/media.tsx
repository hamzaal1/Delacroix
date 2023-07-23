"use client";
import { RootState } from '@/redux/store';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux';
import CMS from './cms';

interface Content {
  _id: string;
  title: string
}

function Media() {
  let facebook_id = "9174b9e9-c408-477b-9449-15eceb99e3ea";
  let instagrame_id = "7f6d325c-ffde-45ce-a719-3a21a76a1bcf";
  const { data } = useSelector((state: RootState) => state.content);
  let facebook = data.find((obj: Content) => obj._id === facebook_id) || { _id: "null", title: "null" };
  let instagram = data.find((obj: Content) => obj._id === instagrame_id) || { _id: "null", title: "null" };
  return (
    <div>
      <h2 className="text-sm font-medium"> <CMS id='698f0552-5e35-4a46-8819-bbb9ee657044' /> </h2>
      <div className="bg-white rounded mt-4 shadow-lg py-6">
        <div className="px-8">
          <ul className='flex gap-5 text-3xl  justify-center md:justify-start'>
            <li>
              <a href={instagram.title} className="hover:text-drose" target='_blank'>
                <i className="fa-brands fa-instagram " />
              </a>
            </li>
            <li>
              <a href={facebook.title} className="hover:text-dblue" target='_blank'>
                <i className="fa-brands fa-square-facebook" />
              </a>
            </li>
          </ul>
        </div>

        <div className="px-8 mt-4 border-t border-drose pt-4">
          <div>
            <div className='flex justify-center items-center'>
              <Link className='inline-block ' href={'/'}>
                <Image className='mb-4 md:mb-2 ' src={'/logo-1.png'} width={180} height={30} alt='logo' />
              </Link>
            </div>
            <ul className='grid grid-rows-1 gap-2 text-gray-800 justify-center text-center'>
              <li><i className="fa-regular fa-map me-1 text-lg" /><span><CMS id='17ada544-f319-4fc4-9aac-fdbbd04ff3ff' /></span></li>
              <li> <i className="fa-regular fa-paper-plane me-2 text-lg" /><span><CMS id='3cc7396c-6d29-40e8-92d0-fa69b3d10043' /> </span></li>
              <li> <i className="fa-solid fa-phone me-2 text-lg" />
                <span><CMS id='82c238ca-6ff2-4319-99db-f0503c3106ae' /></span> <br />
                <span className='ms-7'><CMS id='7242c44b-42f0-4790-8b9d-3128facc1099' /></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Media