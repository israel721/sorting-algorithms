const nums = [1, 8, 2, 7, 9, 4, 3];

function insertionSort(array) {
    const length = array.length;
    for (let i = 1; i < length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
    }
    return array;
}

console.log(insertionSort(nums));