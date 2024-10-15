const t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let arrT: number[][] = [];

//
//
function genereteStrig(arr: number[], i: number = 0) {
  gT(arr, i);
}

function gT(arr: number[], i: number) {
  const temp = [...arr];

  if (i >= arr.length - 1) {
    for (let index = 0; index < t.length; index++) {
      temp[i] = t[index];
      arrT.push(temp);
    }
  } else if (i < arr.length) {
    for (let index = 0; index < t.length; index++) {
      temp[i] = t[index];
      genereteStrig(temp, i + 1);
    }
  }
}
// t.forEach((v, i) => {
//   genereteStrig(i);
// });

genereteStrig([0, 1, 2, 3, 4, 5, 6, 7]);

console.log(arrT.length);

// for (let index1 = 0; index1 < t.length; index1++) {
//   for (let index2 = 0; index2 < t.length; index2++) {
//     console.log([t[index1], t[index2]]);
//   }
// }
