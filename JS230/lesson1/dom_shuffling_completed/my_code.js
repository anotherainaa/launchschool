console.log('Hello')

let images = document.getElementsByTagName('img');
let figures = document.getElementsByTagName('figure');

let figure1 = figures[0];
let figure2 = figures[1];

let chin = figure1.replaceChild(images[1], figures[0].childNodes[0]);


// let removed = figures[0].removeChild(figures[0].childNodes[1]);

// console.log(images);
// console.log(figure1);
// console.log(figure2);
figures[1].insertBefore(images[1], figures[1].firstChild);


// figures.replaceChild(, figure1)
