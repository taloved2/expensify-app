// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher:{
//         name:'Penguin'
//     }
// }

// const {name : publisherName = 'Self published'} = book.publisher;

// console.log(publisherName);

const item = ['cofee (hot)', '2.00$', '2.50$', '2.75$'];
const [itemName, ,mediom] = item;

console.log(`${itemName} cost ${mediom}`);