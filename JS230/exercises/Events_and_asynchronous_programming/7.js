// we need to scroll
document.addEventListener('DOMContentLoaded', () => {
  function removehighlight() {
    let currentHighlight = document.querySelector('.highlight');
      
    if (currentHighlight) {
      currentHighlight.classList.remove('highlight');
    }
  }

  function addHighlight(element) {
    element.classList.add('highlight');
  }


  let links = document.querySelector('ul');
  links.addEventListener('click', event => {
    event.stopPropagation();

    if (event.target.tagName === 'A') {
      removehighlight();
      let articleId = event.target.textContent.toLowerCase().split(' ').join('-');
      let currentArticle = document.getElementById(articleId);
      addHighlight(currentArticle); 
    }
  });

  let articles = [].slice.call(document.querySelectorAll('article'));

  articles.forEach(article => {
    article.addEventListener('click', event => {
      event.stopPropagation();

      removehighlight();
      addHighlight(article);
    })    
  });

  document.addEventListener('click', event => {
    articles.forEach(article => {
      if (!article.contains(event.target)) {
        removehighlight();
        let main = document.querySelector('main');
        addHighlight(main);
      }
    })
  })

})


// clear highlight from other articles 