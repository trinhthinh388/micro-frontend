const url = 'https://fakestoreapi.com';

const enum ENDPOINTS {
  product = 'products',
  cart = 'cart',
}

export const URL = Object.freeze({
  product: `${url}/${ENDPOINTS.product}`,
  cart: `${url}/${ENDPOINTS.cart}`,
});
