// console.log("person1:show ticket");
// console.log("person2:show ticket");

// const promiseWifeBringingTicket = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("ticket");
//   }, 3000);
// });

// const getPopcorn = promiseWifeBringingTicket.then(function (t) {
//   console.log(`husban:we should go`);
//   console.log(`wife:no i am hungry`);
//   return new Promise(function (resolve, reject) {
//     resolve(`${t} popcorn`);
//   });
// });

// const getButter = getPopcorn.then(function (t) {
//   console.log(`husband: Here is the popcorn`);
//   console.log(`husband: we should go in`);
//   console.log(`wife:I need butter on my popcorn`);
//   return new Promise(function (resolve, reject) {
//     resolve(`${t} butter`);
//   });
// });

// const getColdDrinkd = getButter.then(function (t) {
//   console.log(`husband:here is the butter`);
//   console.log(`wife:No! i need colddrinks`);
//   return new Promise(function (resolve, reject) {
//     resolve(`${t} colddrinks`);
//   });
// });

// getColdDrinkd.then(function (t) {
//   console.log(t);
// });

// console.log("person4:show ticket");
// console.log("person5:show ticket");

console.log("person1:show ticket");
console.log("person2:show ticket");

const preMovie = async function () {
  const promiseWifeBringingTicket = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("ticket");
    }, 3000);
  });

  const getPopcorn = promiseWifeBringingTicket.then(function (t) {
    return new Promise(function (resolve, reject) {
      resolve(`popcorn`);
    });
  });

  const getButter = getPopcorn.then(function (t) {
    return new Promise(function (resolve, reject) {
      resolve(`butter`);
    });
  });

  const getColdDrink = getButter.then(function (t) {
    return new Promise(function (resolve, reject) {
      resolve(`colddrinks`);
    });
  });

  let ticket = await promiseWifeBringingTicket;

  console.log(`wife:here is the ${ticket}`);
  console.log(`husban:we should go`);
  console.log(`wife:no i am hungry. I need some popcorn`);

  let popcorn = await getPopcorn;

  console.log(`husband: Here is the ${popcorn}`);
  console.log(`husband: we should go in`);
  console.log(`wife:I need butter on my popcorn`);

  let butter = await getButter;

  console.log(`husband: Here is the ${butter}`);
  console.log(`husband: we should go in`);
  console.log(`wife:No, I need colddrinks`);

  let colddrinks = await getColdDrink;
  console.log(`husband: Here is the ${colddrinks}`);
  console.log(`husband: anything else darling!`);
  console.log(`wife:No, we are getting late`);
  console.log(`husband:Thanks! for reminding`);

  return ticket;
};

preMovie().then(function (t) {
  console.log(`person3:shows the ${t}`);
});

console.log("person4:show ticket");
console.log("person5:show ticket");
