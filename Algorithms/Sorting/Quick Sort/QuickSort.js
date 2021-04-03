const quickSort = (arr) =>{
    if(arr.length <= 1){
        return arr;
    }

    let pivotEl = arr[arr.length-1];
    let leftArr = [];
    let rightArr = [];

    arr.slice(0, arr.length-1).forEach((item)=>{
        if(item < pivotEl){
            leftArr.push(item);
        }
        else if(item > pivotEl){
            rightArr.push(item);
        }
    })
    if(leftArr.length > 0 && rightArr.length > 0){
        return [...quickSort(leftArr), pivotEl, ...quickSort(rightArr)];
    }
    else if(leftArr.length > 0){
        return [...quickSort(leftArr), pivotEl];
    }
    else{
        return [ pivotEl, ...quickSort(rightArr)];
    }
    
};

console.log(quickSort([7,93,45,23,1,78,45,32,66,390,93,7786,223,4,6,83]));

