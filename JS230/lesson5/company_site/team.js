document.addEventListener('DOMContentLoaded', () => {
  console.log('hello');
  document.addEventListener('click', event => {
    let images = document.querySelectorAll('img');

    images.forEach(image => {
      if (event.target.contains(image)) {
        event.preventDefault();
        console.log('team member clicked');

        // // Create a modal
        // let link = event.target.closest('a');
        // let modal = document.querySelector('#modal');
        // let modalLayer = document.querySelector('#modal-layer');
        // modal.style.display = 'block';
        // modalLayer.classList.replace('hide', 'show');
        // modal.classList.replace('hide', 'show');
      }
    })
  })

});