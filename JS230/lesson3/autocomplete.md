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
