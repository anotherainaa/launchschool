# Project: Search Autocomplete, Part 2 - Setting up the UI

What can we note about the code? 
- the call to `Autocomplete.init` inside the event `DOMContentLoaded` 
- this ensures that the DOM is ready before the code tha manipulates it runs

What is the wrapper for?
- parent of the input? 

What is the overlay for? 
- For showing the suggested country name

What is the ul list for?
- For showing the list of countries

It's good practice to set the UI to null? 

What event handlers do we need? 
- We need to send request to the server when a user types some text into the text input field.

What do we do in the draw function? 
- first thing we do is to remove all the previous list items we may have rendered to the listUI element earlier.
  - that's why we are using `removeChild` until the list is empty
- next, we set the overlay content to an empty string if `Autocomplet.visible` is false
- then, we repopulate `listUI` with the current set of matched countries that we received from the server.
   - we do that by wrapping each country in a `li` element that has an `autocomplete-ui-choice` class. 

What does the `reset` button do? 
- set the `visible` and `matches` property back to its default value
- then it cleans up the UI with `draw`.
- `reset()` seems a perfect candidate to call inside `init` since it set the initial state of our application. 

## Project: Search Autocomplete, Part 5 - Throttling XHR requests

What is the problem?
- The application sends a request every time you enter a character or hit the backspace key
  - this is not needed.
- Making requests that we don't need is bad practice!
  - it puts undesirable strain on the server, which is a huge concern in a production environment

What is the solution?
- Throttling
  - delay sending an XHR to the server for a short period - not send it at all if we no longer need it! (abort?)
- libraries provide this functionality with a function named `debounce`
- `debounce` is a function that takes a callback and a delay in milliseconds as arguments and return a new function that calls the callback after the specified delay elapses

### Implementing debounce

```javascript
export default (func, delay) => {
  let timeout;
  return (...args) => {
    if (timeout) { clearTimeout(timeout) }
    timeout = setTimeout(() => func.apply(null, args), delay);
  };
};
```

