## What did I learn?

- Pay attention to what `box-sizing` is being used.
- By default, the `box-sizing` is using `content-box`
  - If so, calculating the width and height takes into consideration the height, width, padding, border, margin.
- If the `box-sizing` is `border-box`, it makes it easier to size elements because the box shrinks to absorb the extra width from padding and border from the element's width and height.
- How does `block` `inline` and `inline-block` elements differ?
  - `block` always takes a whole line by itself.
  - `inline` only takes into consideration the actual content size?
  - `inline` behaves like a block but will stay inline so long as there is space?
