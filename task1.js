// 1. Repeating elements
let array = ['trf','rfdfstr', 'trdfsdwsed', 'trsdasa','trff'];

console.log(longestchain(array));

function longestchain(arr){
    let main = {};
    let temp = {};

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === temp.name) {
            temp.count++;
        } else {
            if(temp.count > (main.count || 0)) {
                main = cloneobject(temp);
            }
            temp = chaindata(arr[i], i);
        }
    }
    return main;
}

function chaindata(name, index){
     return {
        name: name,
        count: 1,
        index: index
     }
}

function cloneobject(object){
    let x = {};
    for(let key in object){
        x[key] = object[key];
    }
    return x;
}
