document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  // ====== EXAMPLES ===== TO BE DELETED

  form.addEventListener('focus', event => {
    if (!(event.target.value === 'Sign Up') && !(event.target.id === 'phone')) {
      event.target.style.background = 'pink';
    }


  }, true);


  const firstName = document.querySelector('input[name="first_name"]');
  const password = document.querySelector('input[type="password"]');
  let firstNameValidation;
  let passwordValidation;

  form.addEventListener('blur', event => {
    event.target.style.background = '';

    if (firstName.value.trim().length === 0 && !firstNameValidation) {
      firstNameValidation = document.createElement('p');
      let text = document.createTextNode('First name must not be empty');
      firstNameValidation.style.color = 'red';
      firstNameValidation.style.display = 'inline-block';
      firstNameValidation.appendChild(text);
      firstName.insertAdjacentElement('afterend', firstNameValidation);
    }

    if (password.value.length < 10 && passwordValidation === undefined) {
      passwordValidation = document.createElement('p');
      let text = document.createTextNode('Password must be 10 characters or more');
      passwordValidation.style.color = 'red';
      passwordValidation.style.display = 'inline-block';
      passwordValidation.appendChild(text);
      password.insertAdjacentElement('afterend', passwordValidation);
    } 
    
  }, true);
})

/*

validate inputs? 
- validate first name is not empty? 
  - if empty, add a red text that the name must not be empty
- validate last name is not empty? 
  - if empty, add a red text that the name must not be empty
- 
    // if (firstName.trim().length === 0 && !firstNameValidation) {
    //   firstNameValidation = document.createElement('p');
    //   let text = document.createTextNode('First name must not be empty');
    //   firstNameValidation.style.color = 'red';
    //   firstNameValidation.style.display = 'inline-block';
    // }

    // if (password.value.length < 10 && passwordValidation === undefined) {
    //   passwordValidation = document.createElement('p');
    //   let text = document.createTextNode('Password must be 10 characters or more');
    //   passwordValidation.style.color = 'red';
    //   passwordValidation.style.display = 'inline-block';
    //   passwordValidation.appendChild(text);
    //   password.insertAdjacentElement('afterend', passwordValidation);
    // } 

*/