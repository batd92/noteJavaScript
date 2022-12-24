const output1 = (function (x) {
    delete x;
    return x;
})(0);
console.log(output1); // 0 => Delete operation is not used to delete a property from an object

const x = 1;
const output2 = (function () {
    delete x;
    return x;
})();
console.log(output2); // 1 => Delete operation is not used to delete a property from an object

const obj = {
    'pikachu': 'MN'
}
const output3 = (function() {
    delete obj.pikachu;
    return obj.pikachu;
})();
console.log(output3); // undefined => Delete operator is used to delete a property from an object

const pokemon = {
    pikachu: 'MN',
}
const obj1 =  Object.create(pokemon);
delete obj1.pikachu;
console.log(obj1.pikachu); // MN => Toán tử delete không xóa thuộc tính nguyên mẫu.
// Nếu muốn xóa thì sẽ sử dụng: __proto__
delete obj1.__proto__.pikachu;
console.log(obj1); // {}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
delete arr[2];
console.log(arr);   // [..., <1 empty item> , ...]