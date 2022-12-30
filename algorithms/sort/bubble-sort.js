function sort(arr = []) {
    const arrNew = [...arr];
    let isSwapped = false;
    for (let i = 0; i < arrNew.length; i++) {
        for (let j = (arr.length - 1); j > i; j--) {
            if (arrNew[j - 1] > arrNew[j]) {
                isSwapped = true;
                // swap
                [arrNew[j], arrNew[j - 1]] = [arrNew[j - 1], arrNew[j]];
            }
        }
    }
    if (!isSwapped) return arr;
    return arrNew;
}
console.log(sort([1, 2, 3, 6, 7, 8, 12, 10, 9, 7, 5, 4, 3, 0, -1]));
