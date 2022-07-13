import { Category } from "./category";
import { Product } from "./product";

export function getShoppingCartProducts(shoppingCart: Product[], categories: Category[]) {
  let newShoppingCart: any[] = <any>[];

  console.log(shoppingCart.length);
  console.log(categories);

  for (let i = 0; i < categories.length; i++) {
      const productFind = shoppingCart.filter((product: Product) => product.category === categories[i]._id)
      newShoppingCart = newShoppingCart.concat(productFind);
  }

  return newShoppingCart;
}

export function addProduct(shoppingCart: Product[], productNew: Product): Product[] {

  const  data = <Product>{
    "category": productNew.category,
    "description": productNew.description,
    "images_url": productNew.images_url,
    "price": productNew.price,
    "title": productNew.title,
    "_id": productNew._id,
    "quantity": 1
  }

  const productFind = shoppingCart.find((element) => 
    element._id === data._id
  );

  if (productFind === undefined) {

    return [...shoppingCart, data];

  } else if (productFind.quantity < 9) {

    productFind.quantity++
    return shoppingCart.map((product) => (product._id === productFind._id ? productFind : product));

  } else {

    return [...shoppingCart];

  }
}

export function deleteProduct(shoppingCart: Product[], productD: Product): Product[] {

  return shoppingCart.filter((product) => product._id !== productD._id);

}

export function quantityProduct(shoppingCart: Product[], productD: Product): Product[] {

  const data = <Product>{
    "category": productD.category,
    "description": productD.description,
    "images_url": productD.images_url,
    "price": productD.price,
    "title": productD.title,
    "_id": productD._id,
    "quantity": productD.quantity
  }

  return shoppingCart.map((product) => (product._id === data._id ? data : product));

}
