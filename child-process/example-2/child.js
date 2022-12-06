process.on('message', async (numberRecord) => {
    console.log('Child reciver: ' + numberRecord);
    const total = await getTotals(numberRecord);
    // Send data to parent
    process.send(total);
});


async function getTotals(numberRecord) {
    console.log('start getTotals');
    let total = 0;
    for (let index = 0; index < numberRecord; index++) {
        total += index;
    }
    return total;
}