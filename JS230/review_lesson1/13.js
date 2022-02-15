// Create a paragraph to the document with the text This is a test.

let paragraph = document.createElement('p');
paragraph.textContent = "This is a test.";
document.body.appendChild(paragraph);

// Create a text node and append it to the paragapraph element

let text = document.createTextNode('Another test');
paragraph.appendChild(text);

