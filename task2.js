// 2. Even numbers 

let second_arr = [1,2,3,4,5,6,7,8,9,10,1000,5678,23,14,45,1005];
const even_nums = second_arr.filter(num => {
     const stringnum = String(num);
     return stringnum.length % 2 === 0;
});

console.log(even_nums);
