// const a = {
//     b : "23",
//     d : "32",
//     c : {
//         k : "23"
//     },
// };
// console.log(a)
const Quote = require('inspirational-quotes');
var a = Quote.getRandomQuote();
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : a,
    e : "Oo",
    T : "V"
}));
