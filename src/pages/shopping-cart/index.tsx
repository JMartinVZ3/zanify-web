import React , {useState, useEffect} from "react";

import { useFormik } from 'formik';
import * as yup from 'yup';

import ShoppingCartObject from "../../components/ShoppingCartObject/ShoppingCartObject";
import { useShoppingCart } from "../../application/shoppingCart";

import { useShoppingCartStorage } from "../../services/shoppingCartAdapter";
import { useCategoriesStorage } from "../../services/categoriesAdapter";

const validationSchema = yup.object({
    name: yup
        .string()
        .required('Name is required'),
    lastName: yup
        .string()
        .required('Last Name is required'),
});

const ShoppingCart = () => {

    const { useGetShoppingCartProducts } = useShoppingCart();

    const { categories } = useCategoriesStorage();

    useEffect(() => {

        useGetShoppingCartProducts(categories)

    }, []);

     const { shoppingCart } = useShoppingCartStorage();

    console.log(shoppingCart)

    const [sent, setSent] = useState(false);

    let total: number = 0;


    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].quantity != null) {
            total += shoppingCart[i].price * shoppingCart[i].quantity!;
        }
    }
  

    return(
        <div className="bg-gray">
            <div className="grid grid-rows-2 grid-flow-col gap-4 p-4">
                <DisplayShoppingCartProducts shoppingCart={shoppingCart}/>
                <DisplayTotalShoppingCart shoppingCart={shoppingCart}/>
            </div>
        </div>
    );
};

const DisplayShoppingCartProducts = ({ shoppingCart } : any) => {

  return (
    <div className="row-span-2 col-span-2 bg-gray-light rounded p-6">
        <p className="text-darkBlue font-bold text-3xl">
            Carrito de Compra
        </p>
        <p className="text-gray-dark font-thin text-sm">
            Esta es la orden que se enviará a la tienda
        </p>
        <div className="bg-gray pb-0.5 my-4"/>
        <>
        {!shoppingCart?.length ? (
          <div/>
        ) : (
          shoppingCart.map((product: any) => (
            <>
            <ShoppingCartObject product={product}/>
            <div className="bg-gray pb-0.5 my-4"/>
            </>
          ))
        )}
      </>
    </div>
  )
}

const DisplayTotalShoppingCart = ({ shoppingCart, total, setSent } : any ) => {
    return (
        <div className="row-span-auto md:row-span-2 col-span-2 bg-gray-light rounded p-6">

        </div>
    )
}

export default ShoppingCart;