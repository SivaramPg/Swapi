let Urls = [];

// Create an array of urls to fetch.
for (var i = 1; i <= 80; i++) {
  if (i !== 17) {
    Urls.push(`https://swapi.dev/api/people/${i}/`);
  }
}

export default Urls;
