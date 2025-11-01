// 3. Squared number sorting

function squared_array (numbers) {
    let square_nums = [];
    for (let i = 0;i < numbers.length; i++) {
        square_nums.push(numbers[i] * numbers[i]);
    }
    square_nums.sort((a, b) => a - b);
    return square_nums;
}

const arr_bef = [10,20,30,40,2,3,4,5];
console.log(squared_array(arr_bef));
