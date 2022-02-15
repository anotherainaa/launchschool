// Question 1

let h2s = document.querySelectorAll('h2');

let wordCounts = [...h2s].map(heading => {
  return heading.textContent.trim().split(' ').length;
});

wordCounts // [1, 3, 3, 3, 1, 2, 4, 1, 5, 2, 2, 1, 1, 2, 2, 2]

// Question 2

let toc1 = document.querySelector('.toc');
let toc2 = document.getElementById('toc');
let toc3 = document.getElementsByClassName('toc')[0];
let toc4 = document.querySelectorAll('.toc')[0];

// Question 3

let links = document.querySelectorAll('.toc a');

[...links].forEach((link, index) => {
  if (index % 2 !== 0) {
    link.style.color = 'green';
  }
})

// Alternative solution

let links = document.querySelectorAll('.toc a');

for (let i = 0; i < links.length; i += 1) {
  if (i % 2 === 1) {
    links[i].style.color = 'green';
  }
}

// Question 4

let nodes = document.querySelectorAll('div .thumbcaption');
let captions = [...nodes].map(caption => {
  return caption.textContent.trim();
})

// Alternative
let caption2 = [];
for (let i = 0; i < nodes.length; i += 1) {
  caption2.push(nodes[i].textContent.trim());
}
console.log(caption2);

// Question 5

let keys = ['Kingdom', 'Phylum', 'Clade', 'Class', 'Order', 'Suborder', 'Family',
            'Genus', 'Species'];
let classification = {};
let tds = document.querySelectorAll('.infobox td');
let cell;
let link;

[...tds].forEach(cell => {
  console.log(cell); 

  keys.forEach(key => {
    if (cell.textContent.includes(key) !== -1) {
      link = cell.nextElementSibling.firstElementChild;
      classification[key] = link.textContent;
    }
  })
})

// for (let index = 0; index < tds.length; index += 1) {
//   cell = tds[index];
//   console.log(cell);

//   keys.forEach(key => {
//     if (cell.textContent.indexOf(key) !== -1) {
//       link = cell.nextElementSibling.firstElementChild;
//       classification[key] = link.textContent;
//     }
//   })
// }

console.log(classification);