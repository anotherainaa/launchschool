console.log('Hello')

let images = document.getElementsByTagName('img');
let figures = document.getElementsByTagName('figure');

let figure1 = figures[0];
let figure2 = figures[1];

figure1.replaceChild(images[1], figure1.childNodes[0]);
figure2.insertBefore(images[1], figure2.firstChild);

let h1 = document.body.childNodes[1].childNodes[1];
let main = document.body.childNodes[1];

main.removeChild(h1);

let header = document.body.lastChild.previousElementSibling.previousElementSibling;

header.insertBefore(h1, header.childNodes[0])
document.body.removeChild(header);
document.body.insertBefore(header, main);

main.firstElementChild.removeChild(figure1);
main.firstElementChild.removeChild(figure2);


main.firstElementChild.firstElementChild.appendChild(figure1);
main.firstElementChild.firstElementChild.appendChild(figure2);

