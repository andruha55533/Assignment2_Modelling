// 10. evenly sorted array

function sortArrayByParity(nums) {
  let even = [], odd = [];
  for (let num of nums) {
    if (num % 2 === 0) even.push(num);
    else odd.push(num);
  }
  return [...even, ...odd];
}

console.log(sortArrayByParity([3,1,2,4]));
