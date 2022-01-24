function mergeSort(arr){
    if (arr.length  <= 1) return arr;

    middle = Math.floor(arr.length/2);
    
    // Split array
    let arr1 = arr.slice(0,middle);
    let arr2 = arr.slice(middle);
    
    // Merge Recursive Merge Results 
    let merge_array = mergeArray(mergeSort(arr1),mergeSort(arr2));

    return merge_array;
}

function mergeArray(arr1,arr2){
    let arr = [];
    let arr1_position = 0;
    let arr2_position = 0; 
    let total_length = arr1.length + arr2.length;
    for(let i = 0; i <= total_length - 1; i++){
        if(!arr1[arr1_position] && arr2[arr2_position]){
            arr.push(arr2[arr2_position]);
            arr2_position++; 
        } else if(arr1[arr1_position] && !arr2[arr2_position]){
            arr.push(arr1[arr1_position]);
            arr1_position++;
        } else {
            if(arr1[arr1_position] > arr2[arr2_position]){
                arr.push(arr2[arr2_position]);
                arr2_position++; 
            } else {
                arr.push(arr1[arr1_position]);
                arr1_position++;
            }
        }
    }
    return arr;
}


let input_arr = [1,3,23,5,7,9,20,8,32,12,41];
console.log('Sorted: ',mergeSort(input_arr));
console.log('Unsorted: ',input_arr);