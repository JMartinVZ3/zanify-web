import React from 'react';

import { useRouter } from 'next/router'

import Categories from '../../../components/Categories/Categories';

const Shop = () => {

    const router = useRouter();

    const { shopName, userName } = router.query;

    return (
        <>
            <div className='bg-gray'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 ">
                    <div className=""/>
                    <h1 className='font-bold text-6xl text-darkBlue'>
                        Catálogo
                    </h1>
                    <div>
                        <Categories userName={userName} shopName={shopName}/>
                    </div>
                </div>
            </div>
            <div className="py-12 bg-gray-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
                    <div className='flex justify-between items-center py-6 md:justify-start md:space-x-10'>
                        <p className="mt-2 text-3xl text-darkBlue font-extralight sm:text-4xl">
                          Crea tu tienda online en menos de 1 minuto con Zanify
                        </p>
                        <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue hover:bg-blue">
                          Join Today
                        </a>
                        <a
                          href='#' className="ml-2 whitespace-nowrap border-blue inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-blue bg-white hover:bg-white"
                        >
                          Contact Us
                        </a>
                    </div>
                </div>
            </div>    
        </>
    )
}

export default Shop;