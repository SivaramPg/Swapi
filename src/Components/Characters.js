let Urls = [];

// Create an array of urls to fetch.
for (var i = 1; i <= 88; i++) {
  if (i !== 17) {
    Urls.push(`https://swapi.co/api/people/${i}/`);
  }
}

export default Urls;