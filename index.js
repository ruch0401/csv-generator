const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const countRecords = 1;
const csvWriter = createCsvWriter({
    path: '1out_' + countRecords + '.csv',
    header: [
        {id: 'productlarge_external_id', title: 'productlarge_external_id'},
        {id: 'product_id', title: 'product_id'},
        {id: 'channel_id', title: 'channel_id'},
        {id: 'market_id', title: 'market_id'},
        {id: 'customer_id', title: 'customer_id'},
        {id: 'nrx', title: 'nrx'},
        {id: 'trx', title: 'trx'},
        {id: 'factored_nrx', title: 'factored_nrx'},
        {id: 'total_units', title: 'total_units'},
        {id: 'amount', title: 'amount'},
        {id: 'custom_metric1', title: 'custom_metric1'},
        {id: 'custom_metric2', title: 'custom_metric2'},
        {id: 'custom_metric3', title: 'custom_metric3'},
        {id: 'custom_metric4', title: 'custom_metric4'},
        {id: 'custom_metric5', title: 'custom_metric5'},
        {id: 'custom_metric6', title: 'custom_metric6'},
        {id: 'custom_metric7', title: 'custom_metric7'},
        {id: 'custom_metric8', title: 'custom_metric8'},
        {id: 'custom_metric9', title: 'custom_metric9'},
        {id: 'custom_metric10', title: 'custom_metric10'},
        {id: 'is_deleted', title: 'is_deleted'},

    ]
});

function genRand(min, max, decimalPlaces) {
    let rand = Math.random() < 0.5 ? ((1 - Math.random()) * (max - min) + min) : (Math.random() * (max - min) + min);  // could be min or max or anything in between
    let power = Math.pow(10, decimalPlaces);
    return Math.floor(rand * power) / power;
}

const speciesEnum = ['Iris-setosa', 'Iris-versicolor', 'Iris-virginica']


function getSpecie() {
    return speciesEnum[Math.floor(Math.random() * 3)]
}

let data = [];
for (let i = 0; i < countRecords; i++) {
    let index = (i + 1);
    data.push({
        productlarge_external_id: "productlarge_ext_" + index,
        product_id: "prd_" + genRand(0, 9.9, 10).toString(),
        channel_id: "chn_" + genRand(0, 9.9, 10).toString(),
        market_id: "mkt_" + genRand(0, 9.9, 10).toString(),
        customer_id: "cus_" + genRand(0, 9.9, 10).toString(),
        nrx: genRand(0, 9.9, 10),
        trx: genRand(0, 9.9, 10),
        factored_nrx: genRand(0, 9.9, 10),
        total_units: genRand(0, 9.9, 10),
        amount: genRand(0, 9.9, 10),
        custom_metric1: genRand(0, 9.9, 10),
        custom_metric2: genRand(0, 9.9, 10),
        custom_metric3: genRand(0, 9.9, 10),
        custom_metric4: genRand(0, 9.9, 10),
        custom_metric5: genRand(0, 9.9, 10),
        custom_metric6: genRand(0, 9.9, 10),
        custom_metric7: genRand(0, 9.9, 10),
        custom_metric8: genRand(0, 9.9, 10),
        custom_metric9: genRand(0, 9.9, 10),
        custom_metric10: genRand(0, 9.9, 10),
        is_deleted: false,
    })
}

csvWriter
    .writeRecords(data)
    .then(() => console.log('The CSV file was written successfully'));