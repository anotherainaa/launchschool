/* Buggy code

why?

- The image tag is nested within the `anchor` tag
- the event listener is attached to document. 
  - when there is a click event, it will stop propagation

What's the problem? Clicking the link makes it go to the link in the anchor tag

- The image is nested inside the anchor tag which means that when we click on the image, we are effectively clicking the anchor tag
- stop Propagation doesn't stop the default browser behaviour

- to fix this, we can take the image out of the anchor tag
- or we can use event.preventDefault if we want to nest the image in the anchor tag
- this would prevent the default behaviors, which would stop the browser from trying to visit the URL.

*/


