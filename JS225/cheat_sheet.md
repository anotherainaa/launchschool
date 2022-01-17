# Factory Functions aka or FCOP

```jsx
function makeCat(name, type) {
  return {
    name: name,
    type: type,
    say() {
      console.log('meow');
    }
  }
};
```

What are the two disadvantages of FF? 
- we can't tell which function the object was created from
- all objects created by FF will have copies of all the methods - which is a waste on resource.

