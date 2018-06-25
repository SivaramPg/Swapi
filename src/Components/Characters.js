let Urls = [];

// Create an array of urls to fetch.
for (var i = 1; i <= 16; i++) {
  Urls.push(`https://swapi.co/api/people/${i}`)
}

// push the results of the fetch into an empty array.


// characArray.map(person => console.log(person.name))

export default Urls;