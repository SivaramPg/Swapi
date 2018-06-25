let Urls = [];

// Create an array of urls to fetch.
for (var i = 1; i <= 88; i++) {
  if (i !== 17) {
    Urls.push(`https://swapi.co/api/people/${i}/`);
  }
}

// push the results of the fetch into an empty array.
// Urls.map(url => {
// 	return (
// 		fetch(url).then(response => response.json()).then(result => console.log(result.name))
// 	);
// });

// characArray.map(person => console.log(person.name))

export default Urls;