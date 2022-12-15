// [this] được định nghĩa và mô tả hoàn cảnh, ngữ cảnh function đang được thực hiện
/**
 * in setTimeout with callback is arrow function
 */

 setTimeout(() => {
    console.log('This arrow function ' +  JSON.stringify(this));
}, 0);

/**
 * in setTimeout with callback is not arrow function
 */
setTimeout(function () {
    console.log('This not arrow function ' +  `${this}`);
}, 0);

/**
 * in global
 */
function sayLily() {
    console.log(`In global: ${this}`);
};

/**
 * in object
 */
const Lily = {
    color: 'blue',
    sayLily: function () {
        console.log('In object: '+ JSON.stringify(this));
    }
};

/**
 * in arrow
 */
const sayLilyArrow = () => {
    console.log('In arrow: '+ JSON.stringify(this));
};

/**
 * in class
 */

class Lily2 {
    color = 'blue-lily2';
    say() {
        console.log('In classs: '+ JSON.stringify(this));
    }
};

sayLily(); // => Object [global]
Lily.sayLily(); // => Object [Lily]
sayLilyArrow(); // => Object [{}]
new Lily2().say(); // => Object [Lily2]