# IIFE (Immediately Invoked Function Expressions) là các hàm chạy ngay sau khi được định nghĩa.

- sử dụng IIFE ```(function(){ ... })()```

- Tránh trường hợp khái báo biến ở vùng global namespace mà chỉ sử dụng 1 lần.

```(() => {
  let firstVariable;
  let secondVariable;
})();

firstVariable và secondVariable sẽ bị loại bỏ sau khi hàm được thực thi.
 ```

- Private variables trong module
```
const _iife = (num) => {
    return (func) => {
        const _numPrivate = num;
        const _mn = 'mn';
        const funcA = (n) => {
            console.log('func private');
        }
        return {
            publicFunc: funcA(_numPrivate),
        }
    })(num);
};
const iife = _iife(13);
iife._numPrivate; => // undefined
iife.funcA; => // function private undefined
```

- Execute an async function

```
(function async myFunction() {
    // TODO: implement
    await myFunctionB();
})();

```

- Block scope
```
(() => {
  var form = document.querySelector('#homiedev-form');

  var handleSubmit = (e) => {};

  form.addEventListener('submit', handleSubmit);
})();

// Tại global scope: thử lấy form trong IIFE
console.log(form); // ReferenceError: form is not defined
```