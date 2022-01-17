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



# Garbage Collection

- JS does the allocation and releasing of memory
- It is not being done by the programmer
- It cannot be triggered manually by the programmer
- so what can we do if we need to manage resources manually
  - assign the variable value to `null` (make the code unreferenced by anything else) which would make it eligible for garbage collection.
  
    