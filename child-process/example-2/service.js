const checkLogicService = () => {
    console.log('Check logic service');
    let sum = 0;
    for (let index = 0; index < 10000000; index++) {
        sum += index
    }
};

module.exports = {
    checkLogicService
}