function sort(arr) {
    const arrNew = [...arr];
    for (let i = 0; i < arrNew.length; i++) {
        let idx = i;
        while (arrNew[idx] !== undefined && arrNew[idx] < arrNew[idx - 1]) {
            [arrNew[idx], arrNew[idx -1]] = [arrNew[idx - 1], arrNew[idx]];
            idx--;
        }
    }
    return arrNew;
}

console.log(sort([1, 2, 3, 6, 3]));