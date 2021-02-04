import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD0KqpYRbQgf-VZyn7vqLCWJUpOAMmMYj0",
    authDomain: "expensefiy.firebaseapp.com",
    databaseURL: "https://expensefiy-default-rtdb.firebaseio.com",
    projectId: "expensefiy",
    storageBucket: "expensefiy.appspot.com",
    messagingSenderId: "46838790352",
    appId: "1:46838790352:web:42e2efbb61dfb86cce06d5",
    measurementId: "G-60GNGVY0E6"
  };

  firebase.initializeApp(config);
  const database = firebase.database();


export {firebase, database as default};




















//   database.ref('expenses').on('child_changed',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
//   });

//   database.ref('expenses').on('child__removed',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
//   });

//   database.ref('expenses').on('child_added',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
//   });

//   database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 100,
//     createdAt: 0,
// });
// database.ref('expenses').push({
//     description: 'Gift to Nitay',
//     note: 'it`s hilarious',
//     amount: 6000,
//     createdAt: 98797,
// });
// database.ref('expenses').push({
//     description: 'Winner',
//     note: 'Shit man...',
//     amount: 5000,
//     createdAt: 43242,
// });

// database.ref('expenses').on('value', (snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((child) => {
//             expenses.push({
//             id: child.key,
//             ...child.val()
//         });
//     });
//     console.log(expenses);
// });


// firebase.database().ref().on('value', (snapshot)=>{
//     const data = snapshot.val();
//     console.log(`${data.name} is ${data.job.title} and works for ${data.job.company}`);
// });

// firebase.database().ref().update({
//     name: 'Chen',
//     age:24,
//     'job/company': 'Google'
// });


// firebase.database()
//     .ref()
//     .once('value')
//     .then((data)=>{
//         console.log(data.val());
//     }).catch((e)=>{
//         console.log( "error fetching data", e);
//     });

//   firebase.database().ref().set({
//       name:'Tal Oved',
//       age: 21,
//      stressLevel: 6,
//      job: {
//          title: 'Software developer',
//          company: 'Google'
//      },
//       location: {
//           city: 'Holon',
//           county: 'Israel'
//       }
//   }).then(()=>{
//         console.log("Data is saved");
//   }).catch((e)=>{
//         console.log('this failed', e);
//   });

// firebase.database().ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });


// firebase.database().ref('isSingle')
// .remove()
// .then(()=>{
//     console.log('Remove successed');
// }).catch((e)=>{
//     console.log('failed:', e);
// });