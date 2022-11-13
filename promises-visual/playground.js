// playground.js - comment out the playground version you want to play around with
const axios = require('axios');

// function playground() {
//   console.log('---> start of playground scope');
//   axios.get('https://swapi.dev/api/films/1');
//   console.log('---> end of playground scope');
// }
//
// console.log('-- start outer scope');
// playground();
// console.log('-- end outer scope');


// promise chaining
// function playground() {
//   console.log('---> start of playground scope');
//   axios
//     .get('https://swapi.dev/api/films/1')
//     .then(response => {
//       const { data: { title } } = response;
//       console.log(`---> Star wars film title is ${title}`);
//     })
//   console.log('---> end of playground scope');
// }

// async await
async function playground() {
  console.log('---> start of playground scope');
  const { data: { title } } = await axios.get('https://swapi.dev/api/films/1');
  console.log(`---> Star wars film title is ${title}`);
  console.log('---> end of playground scope');
}

console.log('-- start outer scope');
playground();
console.log('-- end outer scope');
