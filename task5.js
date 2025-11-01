// 5. Merge Array

function merging(num1, m, num2, n) {
     let i = m - 1;
     let j = n - 1;
     let k = m + n - 1;

     while(j >= 0){
        if(i >=0 && num1[i] > num2[j]) {
            num1[k--] = num2[i--];
        } else {
            num1[k--] = num2[j--];
        }
    }
}

let n1 = [1,2,3,0,0,0], n2 = [2,5,6];
merging(n1, 3, n2, 3);
console.log(n1);
