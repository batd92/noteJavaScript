function sort(arr = []) {
    const arrNew = [...arr];
    let min = 0;
    for (let i = 0; i < arrNew.length; i++) {
        min = i;
        for (let j = (i + 1); j < arrNew.length; j++) {
            if (arrNew[j] < arrNew[min]) {
                [arrNew[j], arrNew[min]] = [arrNew[min], arrNew[j]];
            }
        }
    }
    return arrNew;
}

console.log(sort([1, 2, 3, 6, 3, 8, 12, 10, 9, 7, 7, 5, 4, 3, 0, -1]));