function radixSort(arr){
    let maxDigits = getMaxDigit(arr);
    let radixBox = Array.from({length: 10}, () => []) ;
    for (let i = 0 ; i <= maxDigits - 1 ; i++){
        for( let j = 0; j <= arr.length - 1; j++ ){
            let position = getPosition(arr[j],i);
            radixBox[position].push(arr[j]);  
        }
        arr = radixBox.flat(); // Option 1
        // arr = [].concat(...radixBox); // Option 2, but might consume more memory.
        // arr = []; 
        // radixBox.forEach(element => { // Option 3
        //         element.forEach(value => {
        //             console.log(value);
        //             arr.push(value);
        //         })
        //     });
        radixBox = Array.from({length: 10}, () => []) ;   
    }
    return arr;
}


function getPosition(num,position){
    return  Math.floor(Math.abs(num) / Math.pow(10, position)) % 10; // Option 1
    // let digit = (num % Math.pow(10, position)) - (num % Math.pow(10, position-1));
    // return digit / Math.pow(10, position - 1);
    
    
}

function getMaxDigit(arr){

    maxDigit = 0;
    for (let i = 0; i < arr.length ; i++){
        maxDigit = Math.max(maxDigit,Math.floor(Math.log10(Math.abs(arr[i]))) + 1)
    }
    return maxDigit;
}
//console.log(getPosition(1234,3));
// console.log(getDigit(2,0));  

//let input_arr = [32];
// let input_arr = [12,1,3,23,5,7,9,20,8,4,32,41];

let input_arr = [32,6743,1,23,500,42,0];
// console.log(getMaxDigit(input_arr));
console.log('Unsorted: ',input_arr);
console.log('Sorted: ',radixSort(input_arr));
