document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello')
  let form = document.querySelector('form');
  
  form.addEventListener('submit', event => {
    event.preventDefault();
    let itemName = document.querySelector('#name').value;
    let quantity = document.querySelector('#quantity').value;

    if (itemName.trim() === '') {
      alert('Please enter an item!')
    } else {
      if (quantity.trim() === '') quantity = 1;

      let list = document.createElement('li');
      let text = document.createTextNode(quantity + ' ' + itemName);
      list.appendChild(text);
      document.querySelector('ul').appendChild(list);
      form.reset();
    }
  });
})