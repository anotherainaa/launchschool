const renderCountry = function(data) {
  const html = `
  <article class="country">
    <img src="${data.flag}" alt="${data.name}_flag">
    <div class="country_data">
      <h3 class="country_name">${data.name}</h3>
      <h4 class="country_region">${data.region}</h4>
      <p class="country_row"><span>${(Number.parseInt(data.population, 10) / 1000000).toFixed(1)} million people</span></p> 
      <p class="country_row"><span>${data.languages[0].name}</span></p>
      <p class="country_row"><span>${data.currencies[0].name}</span></p>  
    </div>
  </article>
  `

  let countries = document.createElement('div');
  countries.classList.add('countries');
  countries.innerHTML = html;
  
  document.body.appendChild(countries);
}

// const getCountryData = function(country) {
//   // immediately return a request that is pending, because the aync task of getting data is still running
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function(response) {
//       console.log(response);
//       return response.json();
//   })
//     .then(function(data) {
//       console.log(data);
//       renderCountry(data[0]);
//   })
// };

const renderError = function(msg) {
  // do something here
}

const getCountryData = function(country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json()) // pass in a second callback when a promise is rejected. the first is for fulfilled promise
    .then(data => {
      if (data.status === 404) {
        throw new Error(`Country not found (${data.message})`);
      } else {
        renderCountry(data[0])
        const neighbour = data[0].borders[0];
  
        if (!neighbour) {
          throw new Error('No neighbour found!');
        }
        // Country 2
        return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);  
      }
    })
    .then(response => response.json()) // instead of adding error to all the promises, we can use a catch all catch function
    .then(data => renderCountry(data))
    .catch(err =>  {
      console.error(err);
      alert(err);
    })
    .finally(() => {
      console.log('I am run regardless')
    }) // always called regardless of what happens? like hiding loading spinner once operation complete, regardless what happens  
};

document.querySelector('button').addEventListener('click', function() {
  getCountryData('japan');
})
