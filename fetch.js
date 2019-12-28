const fetch = require('node-fetch');
const Filter = require('./filterObj.js');
const Post = require('./post.js');
const filter = new Filter();
const post = new Post();

function fetchData(date, month, time){
    fetch('https://data.cityofchicago.org/resource/k737-xg34.json')
    .then(res => res.json())
    .then(json => filter.ward(json))
    .then(res => filter.month(res, month))
    .then(res => filter.day(res, date))
    .then(res => post.merge(res))
    .then(res => post.create(res, time))
    .then(res => post.post(res))
    .catch(() => post.error())

};

    module.exports = fetchData;