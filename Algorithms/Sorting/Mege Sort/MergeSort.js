const mergeSort = (arr)=>{
    if(arr.length <= 1){
        console.log('Array in base case = ' + arr)
        return arr;
    }
    console.log('Array = ' + arr)
    let middleIndex = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, middleIndex);
    let rightArr = arr.slice(middleIndex);

    return merge(
        mergeSort(leftArr),
        mergeSort(rightArr)
    );
}

const merge = (leftArr, rightArr) =>{
    const sortedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < leftArr.length && rightIndex < rightArr.length){
        const leftEl = leftArr[leftIndex];
        const rightEl = rightArr[rightIndex];

        if(leftEl < rightEl){
            sortedArr.push(leftEl);
            leftIndex++;
        }
        else{
            sortedArr.push(rightEl);
            rightIndex++;
        }
    }
    return [...sortedArr, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
}


console.log(mergeSort([7,93,45,23,1,78,45,32,66,390,93,7786,223,4,6,83]))