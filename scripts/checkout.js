import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js';
//import '../data/cart-class.js';
// import '../data/backend-practice.js';


//async = (shortcut for promises) makes a function return a promise and let's us use "Await".. and write asynchronous code like normal code..
//await = let's us write asynchronous code like normal code...
async function loadPage(){
  try{
    //throw 'error1';

    await loadProductsFetch();

    const value = await new Promise((resolve, reject) => {
      //throw 'error2';
      loadCart(() => {
        //reject('error3');
        resolve('value3');
      });
    });

  } catch(error) {
    console.log('unexpected error. please try again later.');
  }

  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })
]).then((values) => {
  console.log(values);
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/




//promises allow javascript to do multiple things at the same time... (and avoid t0o much nesting)..
/*
new Promise((resolve) => {
  loadProducts(() =>{
    resolve('value1'); 
    //resolve controls when to go to next step..
  });

}).then((value) =>{
  console.log(value);
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/


/*
loadProducts(() => {
  loadCart(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/
