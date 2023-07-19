import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Media() {
  return (
    <div>
      <h2 className="text-sm font-medium">Our Media</h2>
      <div className="bg-white rounded mt-4 shadow-lg py-6">
        <div className="px-8">
          <ul className='flex gap-5 text-3xl  justify-center md:justify-start'>
            <li>
              <a className="hover:text-drose" href="" target='_blank'>
                <i className="fa-brands fa-instagram " />
              </a>
            </li>
            <li>
              <a className="hover:text-dblue" href="" target='_blank'>
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
              <li><i className="fa-regular fa-map me-1 text-lg" /><span>Rue Ahmed Tadili, Tanger 90060</span></li>
              <li> <i className="fa-regular fa-paper-plane me-2 text-lg" /><span>hamzademnati21@gmail.com</span></li>
              <li> <i className="fa-solid fa-phone me-2 text-lg" /><span>(+212) 6 82 49 01 13</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Media