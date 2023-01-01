function sort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    const arrNew = [...arr];
    const middle = Math.floor(arrNew.length/ 2);
    const leftArrr = arrNew.slice(0, middle);
    const rightArrr = arrNew.slice(middle);

    const sortedLeftArrr = sort(leftArrr);
    const sortedRightArrr = sort(rightArrr);
    return merge(sortedLeftArrr, sortedRightArrr);
}

function merge(left, right) {
    let idxLeft = 0;
    let idxRight = 0;
    const arr = [];
    while (idxLeft < left.length && idxRight < right.length) {
        if (left[idxLeft] < right[idxRight]) {
            arr.push(left[idxLeft]);
            idxLeft++;
        } else {
            arr.push(right[idxRight]);
            idxRight++;
        }
    }
    return arr.concat(left.slice(idxLeft).concat(right.slice(idxRight)));
};

console.log(sort([1, 2, 7, 4]));