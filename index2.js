const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const countRecords = 1000;
const csvWriter = createCsvWriter({
    path: '1out_' + countRecords + '.csv',
    header: [
        {id: 'iris6_external_id', title: 'iris6_external_id'},
        {id: 'is_deleted', title: 'is_deleted'},
        {id: 'sepal_length_cm', title: 'sepal_length_cm'},
        {id: 'sepal_width_cm', title: 'sepal_width_cm'},
        {id: 'petal_length_cm', title: 'petal_length_cm'},
        {id: 'petal_width_cm', title: 'petal_width_cm'},
        {id: 'species', title: 'species'}
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
        iris6_external_id: "iris6_ext_" + index,
        is_deleted: false,
        sepal_length_cm: genRand(0, 9.9, 1).toString(),
        sepal_width_cm: genRand(0, 9.9, 1).toString(),
        petal_length_cm: genRand(0, 9.9, 1).toString(),
        petal_width_cm: genRand(0, 9.9, 1).toString(),
        species: getSpecie(),
    })
}

csvWriter
    .writeRecords(data)
    .then(() => console.log('The CSV file was written successfully'));