// 4. Double nulls

function duplicatingzero (arr) {
      let dup = 0;
      let length = arr.length - 1;

      for(let i = 0; i < length - dup; i++) {
        if(arr[i] === 0) {
            if(i === length - dup) {
                arr[length] = 0;
                length -= 1;
                break;
            }
            dup++;
        }
    }

    let last = length - dup;

    for(let i = last; i >= 0; i--) {
        if(arr[i] === 0) {
            arr[i + dup] = 0;
            dup--;
            arr[i + dup] = 0;
        } else {
            arr[i + dup] = arr[i];
        }
    }
}

let arr1 = [1, 0, 2, 3, 0, 4, 5, 0];
duplicatingzero(arr1);
console.log(arr1); 