// sorted array as input
const binarySearch = (arr, left, right, search) =>{
    console.log(left);
    console.log(right);
    if(right >= left){
        let middleIndex = Math.floor(left + (right -1)/2) ;
        console.log(middleIndex);
        let middleEl = arr[middleIndex];
        if(middleEl === search){
            console.log(middleEl);
            return middleIndex;
        }

        if(middleEl < search){
        console.log(middleEl);
            return binarySearch(arr,middleIndex+1,right, search);
        }
        else if(middleEl > search){
            console.log(middleEl);
            return binarySearch(arr,left,middleIndex-1, search);
        }
        else{
            return -1
        }
        
    }
    else{
        return -1
    }
    


};

let arr1 = [
    1,   4,   6,    7, 23,
   32,  45,  66,   78, 83,
   93, 223, 390, 7786
 ];
console.log(binarySearch(arr1, 0, arr1.length, -76))


