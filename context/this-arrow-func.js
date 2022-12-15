this.color = 'blue';
const say = () => {
    console.log(this);
};
const Lily = {
    color: 'green',
    sayLily: say
};

const Lily2 = {
    color: 'green',
    sayLily: () => {
        console.log(this);
    }
};

say(); // => Object [global] vì bản chất this trong arrow function không tồn tại nên sẽ lấy lexical của global (global là môi trường thực thi)
Lily.sayLily(); // => Object [global] vì bản chất this trong arrow function không tồn tại nên sẽ lấy lexical của global
Lily2.sayLily(); // => Object [global] vì bản chất this trong arrow function không tồn tại nên sẽ lấy lexical của global