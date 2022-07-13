import React, {useState, Fragment}  from "react";

import { useDispatch } from 'react-redux';

import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

import { QuantityProduct, DeleteProduct } from '../../features/shoppingCart';

type ShoppingCartObjectProps = {
    product: {
      _id: string
      title: string,
      price: number,
      category: string,
      description: string,
      quantity: number,
      images_url: any
    }
  }

const ShoppingCartObject = ({product} : ShoppingCartObjectProps) => {

    const dispatch = useDispatch();

    const [value, setValue] = useState(product.quantity);

    const loader = 'https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png'

    const image = product.images_url[0]? product.images_url[0] : `${loader}`

    const handleChange = (event: any) => {
        setValue(event.target.value);
        const data = {
            "category": product.category,
            "description": product.description,
            "images_url": product.images_url,
            "price": product.price,
            "title": product.title,
            "_id": product._id,
            "quantity": event.target.value
        }
        dispatch(QuantityProduct(data))
    }

    return (
        <div className="grid grid-rows-1 grid-flow-col pb-4">
            <div className="flex">
                <img className="col-span-1 w-32 h-32 md:h-32 bg-cover object-cover rounded" src="https://www.minervafoods.com/wp-content/uploads/2018/08/como_fazer_hamburguer_caseiro_1.jpg" alt="producto"/>
                <div>
                    <p className="text-darkBlue font-bold text-2xl items-start flex ml-4">
                        Hamburguesa Vegetariana
                    </p>
                    <p className="text-green font-base text-sm items-start flex ml-4">
                        Disponible
                    </p>
                    <div className="flex">
                        <Dropdown/>
                        <button 
                          className="ml-4 text-red-600 hover:text-red-900" 
                          onClick={() => {
                            
                          }}
                        >
                          Eliminar
                        </button>
                    </div>
                </div>
            </div>
            <div className="row-span-2">
                <p className="text-darkBlue font-bold text-base items-end justify-end flex">
                    $6.99
                </p>
            </div>
        </div>
    )

}


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  
  const Dropdown = () => {
    return (
      <Menu as="div" className="relative inline-block text-left ml-4 mt-2">
        <div>
          <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray text-sm font-medium text-darkBlue hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue">
            Cantidad
            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          </Menu.Button>
        </div>
  
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-10 rounded-md shadow-lg bg-white  focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    1
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    2
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    3
                  </a>
                )}
              </Menu.Item>
              <form method="POST" action="#">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full text-left px-4 py-2 text-sm'
                      )}
                    >
                      4
                    </button>
                  )}
                </Menu.Item>
              </form>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    )
  }
  

export default ShoppingCartObject;