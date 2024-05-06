/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
// empty array for products
const products = [];

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
// create products in list
products.push(
  {
    name: 'Cherry',
    price: 4,
    quantity: 0,
    productId: 1,
    image: '/images/cherry.jpg'
  },
  {
    name: 'Orange',
    price: 5,
    quantity: 0,
    productId: 2,
    image: '/images/orange.jpg'
  },
  {
    name: 'Strawberry',
    price: 10,
    quantity: 0,
    productId: 3,
    image: '/images/strawberry.jpg'
  }
);

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
// empty array for the cart
const cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

// Helper function to find product in list
function getProductByIdFromList(productId, productList) {
  // find product in list by ID
  return productList.find(product => product.productId === productId);
}
// add product to the cart
function addProductToCart(productId) {
  // find product in products by its ID
  let product = getProductByIdFromList(productId, products);
  // if product quantity is 0, increase its quantity by 1 and add product to cart, else increase quantity by 1
  if (product.quantity === 0) {
    // increase product quantity by 1
    product.quantity++;
    // add product to cart
    cart.push(product);
  } else {
    // increase product quantity by 1
    product.quantity++;
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
// increase quantity of product in the cart
function increaseQuantity(productId) {
  // find product in cart by its ID
  let product = getProductByIdFromList(productId, cart);
  // if product exists in the cart, increase quantity by 1
  if (product) {
    product.quantity++;
  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

// decrease quantity of product in the cart
function decreaseQuantity(productId) {
  // find product in cart by its ID
  let product = getProductByIdFromList(productId, cart);
  // if product quantity is greater then 1, decrease its quantity by 1, else remove product from cart
  if (product.quantity > 1) {
    // decrease product quantity by 1
    product.quantity--;
  } else {
    // remove product from cart
    removeProductFromCart(productId);
  }
}
/* Create a function named removeProductFromCart that takes in the productId as an argument
- removeProductFromCart should get the correct product based on the productId
- removeProductFromCart should update the product quantity to 0
- removeProductFromCart should remove the product from the cart
*/

// remove product from the cart
function removeProductFromCart(productId) {
  // find product in cart by its ID
  let product = getProductByIdFromList(productId, cart);
  // set index to product
  let index = cart.indexOf(product);
  if (product) {
    // set product quantity to 0
    product.quantity = 0;
    // remove product from cart
    cart.splice(index, 1);
  }
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

// get the total cost of the cart
function cartTotal() {
  // init price to 0
  let price = 0;
  // itereate through cart
  for (let i = 0; i < cart.length; i++) {
    // get total cost of all products
    price = price + cart[i].price * cart[i].quantity;
  }
  // return total cost
  return price;
}

/* Create a function called emptyCart that empties the products from the cart */

// empty all products from the cart
function emptyCart() {
  // itereate through cart
  for (let i = 0; i < products.length; i++) {
    // set product quantity to 0
    products[i].quantity = 0;
  }
  // set cart.length to 0 to empty the cart array
  cart.length = 0;
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/
// variable to keep track the total mount paid
let totalPaid = 0;

// payment
function pay(amount) {
  // add current payment amount to the totalPaid variable
  totalPaid += amount;
  // calculate difference between totalPaid und currentTotal
  let remaining = totalPaid - cartTotal();
  // check if remaining amount is greater than or equal to zero
  if (remaining >= 0) {
    totalPaid = 0;
    // document.querySelector('.cart').innerHTML = '';
    emptyCart();
  }
  // return remaining cost
  return remaining;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}
