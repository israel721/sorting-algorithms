const nums = [1, 8, 2, 7, 9, 4, 3];

function quickSort(array, low = 0, high = array.length - 1) {
    if (low < high) {
        const p = partition(array, low, high);
        quickSort(array, low, p - 1);
        quickSort(array, p + 1, high);
    }
    return array;
}

function partition(array, low, high) {
    const pivot = array[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (array[j] <= pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, high);
    return i + 1;
}

function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

console.log(quickSort(nums));