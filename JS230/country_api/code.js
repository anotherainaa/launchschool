document.addEventListener('DOMContentLoaded', () => {
  
  const renderCountry = function(data) {
    return `
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
  } 
  
  const request = new XMLHttpRequest();
  request.open('GET', 'https://restcountries.com/v2/name/malaysia');
  request.responseType = 'json';

  request.addEventListener('load', event => {
    const [data] = request.response;
    console.log(data.capital);

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

    document.querySelector('.countries').innerHTML = html; 
  });

  request.send();
});