// Question 1

let h2count = document.querySelectorAll('h2');
let h2Array = Array.prototype.slice.call(h2count);
h2Array.map(element => element.textContent.split(' ').length);

// Question 2

document.getElementById('toc');
document.querySelector('#toc');
document.querySelectorAll('.toc')[0]; // This returns a node list

// Question 3

let links = document.querySelectorAll('.toc a')

let linksArray = Array.prototype.slice.call(links);

linksArray.map((el, index) => {
  if (index % 2 !== 0) {
    el.style.color = 'green';
  }
})

// Question 4

let thumbCaps = document.querySelectorAll('.thumbcaption');
let thumbCapsArray = Array.prototype.slice.call(thumbCaps);

let thumbCaptions = thumbCapsArray.map(elem => {
  return elem.textContent.trim();
})

// let nodes = document.querySelectorAll('.thumbcaption');
// let captions = [];

// for (let index = 0; index < nodes.length; index += 1) {
//   captions.push(nodes[index].textContent.trim());
// }

// console.log(captions);

// Question 5

let table = document.querySelector('table').querySelectorAll('td');
let tableArr = Array.prototype.slice.call(table);

let keys = ['Kingdom', 'Phylum', 'Clade', 'Class', 'Order', 'Suborder', 'Family',
            'Genus', 'Species'];
let classification = {};