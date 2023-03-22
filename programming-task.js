// I solved this problem using 3 different ways.Two is commented out. You can uncomment them and Test them.

// solution 1

const vaxTrail = (arr) => {
  const instance = {};

  arr.forEach((item) => {
    if (item.age >= 20 && item.age <= 30 && item.temperature < 100) {
      if (instance.A) {
        instance.A.push(item);
        instance.A.sort((a, b) => a.age - b.age);
      } else {
        instance.A = [item];
      }
    } else if (item.age >= 31 && item.age <= 40 && item.temperature < 100) {
      if (instance.B) {
        instance.B.push(item);
        instance.B.sort((a, b) => a.age - b.age);
      } else {
        instance.B = [item];
      }
    } else if (item.age >= 41 && item.age <= 50 && item.temperature < 100) {
      if (instance.C) {
        instance.C.push(item);
        instance.C.sort((a, b) => a.age - b.age);
      } else {
        instance.C = [item];
      }
    } else if (item.temperature >= 100 && item.age > 0) {
      if (instance.D) {
        instance.D.push(item);
        instance.D.sort((a, b) => a.age - b.age);
      } else {
        instance.D = [item];
      }
    }
  });

  return instance;
};

// solution 2

// const vaxTrail = (arr) => {
//   const instance = {
//     A: [],
//     B: [],
//     C: [],
//     D: [],
//   };

//   arr.forEach((item) => {
//     if (item.age >= 20 && item.age <= 30 && item.temperature < 100) {
//       instance.A.push(item);
//     } else if (item.age >= 31 && item.age <= 40 && item.temperature < 100) {
//       instance.B.push(item);
//     } else if (item.age >= 41 && item.age <= 50 && item.temperature < 100) {
//       instance.C.push(item);
//     } else if (item.temperature >= 100 && item.age > 0) {
//       instance.D.push(item);
//     }
//   });

//   const ans = {
//     A: instance.A.sort((a, b) => a.age - b.age),
//     B: instance.B.sort((a, b) => a.age - b.age),
//     C: instance.C.sort((a, b) => a.age - b.age),
//     D: instance.D.sort((a, b) => a.age - b.age),
//   };

//   return ans;
// };

// solution 3

// const vaxTrail = (arr) => {
//   const instance = {
//     A: [],
//     B: [],
//     C: [],
//     D: [],
//   };

//   arr.forEach((item) => {
//     if (item.age >= 20 && item.age <= 30 && item.temperature < 100) {
//       instance.A.push(item);
//       instance.A.sort((a, b) => a.age - b.age);
//     } else if (item.age >= 31 && item.age <= 40 && item.temperature < 100) {
//       instance.B.push(item);
//       instance.B.sort((a, b) => a.age - b.age);
//     } else if (item.age >= 41 && item.age <= 50 && item.temperature < 100) {
//       instance.C.push(item);
//       instance.C.sort((a, b) => a.age - b.age);
//     } else if (item.temperature >= 100 && item.age > 0) {
//       instance.D.push(item);
//       instance.D.sort((a, b) => a.age - b.age);
//     }
//   });

//   return instance;
// };

// console.log(
//   vaxTrail([
//     { name: "Biplap", age: 22, temperature: 98 },
//     { name: "sunil", age: 21, temperature: 98 },
//     { name: "Rahul", age: 37, temperature: 99 },
//     { name: "Kabir", age: 36, temperature: 99 },
//     { name: "Paul", age: 42, temperature: 98 },
//     { name: "Kat", age: 41, temperature: 98 },
//     { name: "Nayem", age: 51, temperature: 100 },
//     { name: "Sabnaj", age: 50, temperature: 101 },
//   ])
// );
