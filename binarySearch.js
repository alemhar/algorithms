
function binarySearch(haystack,needle){
    let start = 0;
    let end = haystack.length - 1;
    let middle;

    while (start <= end){
        middle = Math.floor((end + start)/2);
        if(haystack[middle] == needle){
            return middle;
        } else if (haystack[middle] > needle){
            end = middle - 1;
        } else if (haystack[middle] < needle){
            start = middle + 1; 
        }
    }

    return -1;
}

console.log(binarySearch([1,2,3,4,5], 3));
