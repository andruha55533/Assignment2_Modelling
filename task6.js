// 6. duplicate removal

function DupRemove (number) {
   if(number.length === 0) {
    return 0;
   }
   let c = 1;
   for(let i = 1; i < number.length; i++) {
      if(number[i] !== number[i - 1]){
      number[c] = number[i];
      c++;
      }
   }
   return c;
}

let first_arr = [1,1,3,4,4,3,2,2,2,53,3434,32,12,18,32];
const k = DupRemove(first_arr);
console.log(k, first_arr.slice(0, k));
