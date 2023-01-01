function sort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const arrNew = [...arr];
    const leftArrr = [];
    const rightArrr = [];

    const pivotItem = arrNew.shift();
    const centerArr = [pivotItem];
    while (arrNew.length) {
        const currentItem = arrNew.shift();
        if (currentItem === pivotItem) {
            centerArr.push(currentItem);
        } else if (currentItem < pivotItem) {
            leftArrr.push(currentItem);
        } else {
            rightArrr.push(currentItem);
        }
    }
    const sortedLeftArrr = sort(leftArrr);
    const sortedRightArrr = sort(rightArrr);
    return sortedLeftArrr.concat(centerArr, sortedRightArrr);
}

console.log(sort([6, 2, 3, 6, 3, 8, 12, 10, 9, 7, 7, 5, 4, 3, 0, -1]));