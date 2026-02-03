const { price, quantity,tax = 7 } = { name: "shirt", price: 500, quantity: 7 };

console.log(price, quantity, tax);

// const price = product.price;

// const discount = price* 20/100;
// const yourPay = price - discount;
// const vatAmount = price*7/100;
// const totalAmount = yourPay + vatAmount;
// console.log(totalAmount)

const discount = (price * 20) / 100;
const yourPay = price - discount;
const vatAmount = (price * 7) / 100;
const totalAmount = yourPay + vatAmount;
// console.log(totalAmount);

// ------------------ //
const numbers = [25, 88, 89, 101]
const [first, second] = numbers