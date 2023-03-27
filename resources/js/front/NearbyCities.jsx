const nearbyCities = require("nearby-cities")
const query = {latitude: 34.4362755, longitude: -119.705086}
const cities = nearbyCities(query)
 
// assert.equal(cities[0].name, 'Mission Canyon')
// assert.equal(cities[1].name, 'Santa Barbara')
// assert.equal(cities[2].name, 'Montecito')
// assert.equal(cities[3].name, 'Summerland')
// assert.equal(cities[4].name, 'Goleta')
 
console.log(cities[0])