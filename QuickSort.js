function QuickSort(arr,left,right)
{
    let pivot = null;
    let partitionIndex = null;
    if (left < right)
    {
        pivot = right;
        partitionIndex = partition(arr,pivot,left,right);
        QuickSort(arr,left,partitionIndex-1);
        QuickSort(arr,partitionIndex+1,right);
    }
    return arr;
}

function partition(arr,pivot,left,right)
{
    let pivotValue = arr[pivot];
    partitionIndex = left;
    for (let i=left; i<right; i++)
    {
        if (arr[i] < pivotValue)
        {
            temp = arr[i];
            arr[i] = arr[partitionIndex];
            arr[partitionIndex] = temp;
            partitionIndex++;
        }
    }
    temp = arr[right];
    arr[right] = arr[partitionIndex];
    arr[partitionIndex] = temp;
    return partitionIndex;
}

let arr = [2,323,2,23,21,67,87,34];
QuickSort(arr,0,arr.length-1);
console.log(arr);
