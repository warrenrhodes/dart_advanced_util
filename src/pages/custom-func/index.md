---
title: Custom func
description: A collection of custom function.
---

## fprint

A formatted print function.

The function takes a list of objects to print, a separator to use between the objects, an end character to append at the end of the output, and an optional file to write the output to.

```typescript
void main() {
  fprint(['Hello', 'world', 123], sep: ', ', unpack: true);
  fprint(['Dart', 'is', 'fun'], unpack: true);
  fprint(['Dart', 'is', 'fun']);
  fprint('value');
}
```

Output:
{% callout appearance="note" disableTitle=true %}
  Hello, world, 123!  
  Dart is fun  
  ['Dart', 'is', 'fun']  
  value
{% /callout %}
