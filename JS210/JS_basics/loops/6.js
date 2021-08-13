// write a for loop that loops over the elements of the array cities and logs the length of each string. 

let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let i = 0; i < cities.length; i += 1) {
  if (cities[i] === null) {
    continue;
  } else {
    console.log(cities[i].length);
  }
} 