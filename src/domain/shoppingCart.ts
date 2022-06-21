import { Product } from "./product";

export function getShoppingCartProducts(shoppingCart: Product[], products: Product[]) {
  let newShoppingCart: any[] = <any>[];

  for (let i = 0; i < products.length; i++) {
      const productFind = shoppingCart.filter((product) => product.category === products[i].id)
      newShoppingCart = newShoppingCart.concat(productFind);
      console.log(newShoppingCart);
  }

  return newShoppingCart;
}

export function addProduct(shoppingCart: Product[], product: Product): Product[] {

  const  data = <Product>{
    "category": product.category,
    "description": product.description,
    "images_url": product.images_url,
    "price": product.price,
    "title": product.title,
    "id": product.id,
    "quantity": 1
}

  return [...shoppingCart, data];
}

export function deleteProduct(shoppingCart: Product[], productD: Product): Product[] {

  return shoppingCart.filter((product) => product.id !== productD.id);

}

export function quantityProduct(shoppingCart: Product[], productD: Product): Product[] {

  const data = <Product>{
    "category": productD.category,
    "description": productD.description,
    "images_url": productD.images_url,
    "price": productD.price,
    "title": productD.title,
    "id": productD.id,
    "quantity": productD.quantity
  }

  return shoppingCart.map((product) => (product.id === data.id ? data : product));

}
