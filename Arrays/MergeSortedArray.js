function mergeSortedArrays(arr1 , arr2) {

    const mergeList = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i = 1;
    let j = 1;

    // check input 
    if(arr1.length === 0) return arr2;
    if(arr2.length === 0) return arr1;

    while(arr1Item || arr2Item) {

        console.log(arr1Item , arr2Item);

        if(arr2Item === undefined || arr1Item < arr2Item) {
            mergeList.push(arr1Item);
            arr1Item = arr1[i];
            i++;
        }
        else {
            mergeList.push(arr2Item)
            arr2Item = arr2[j];
            j++;
        }

    }
    return mergeList; // [0,4]
}

console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30]));