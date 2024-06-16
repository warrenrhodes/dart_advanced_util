---
title: Generic List Extensions
description: A collection of extension methods for the Iterable class to add common utility functions for lists.
---

{% callout appearance="caution" disableTitle=false%}
Some functions of list cannot be tested directly on this site, as they require an additional import, which is not yet supported. for more tests import directly

into your project the package [dart_advanced_utils](https://pub.dev/packages/dart_advanced_utils) or run.

{% tab-group %}

{% tab-list %}
  {% tab label="dart" /%}
  {% tab label="flutter" /%}
{% /tab-list %}

{% tabs-panels %}
  {% tab-panel %}

  ```bash
    dart pub get dart_advanced_utils
  ```

  {% /tab-panel %}

  {% tab-panel %}

  ```bash
    flutter pub get dart_advanced_utils
  ```

  {% /tab-panel %}
{% /tabs-panels %}

{% /tab-group %}

{% /callout %}

## Operator *

Returns a new list that contains this list repeated a specified number of times.

{% fence %}

```typescript
void main() {
  List<int> numbers = [1, 2, 3];
  List<int> repeatedNumbers = numbers * 3;
  print(repeatedNumbers);
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 [1, 2, 3, 1, 2, 3, 1, 2, 3]

{% /callout %}

## Operator +

Returns a new list that contains the elements of this list followed by the elements of another list.

{% fence %}

```typescript
void main() {
  List<int> numbers1 = [1, 2, 3];
  List<int> numbers2 = [4, 5, 6];
  List<int> concatenatedNumbers = numbers1 + numbers2;
  print(concatenatedNumbers);
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 [1, 2, 3, 4, 5, 6]

{% /callout %}

## Count

Counts the occurrences of an element in the list.

{% fence %}

```typescript
void main() {
  List<int> numbers = [1, 2, 3, 2, 1];
  print(numbers.count(2)); 
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 2

{% /callout %}

## Sum

Calculates the sum of all elements in the list.

{% fence %}

```typescript
void main() {
  List<int> numbers = [1, 2, 3];
  print(numbers.sum); 
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 6

{% /callout %}

## Average

Calculates the average of all elements in the list.

{% fence %}

```typescript
void main() {
  List<int> numbers = [1, 2, 3];
  print(numbers.average); 
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 2.0

{% /callout %}

## Median

Calculates the median of all elements in the list.

{% fence %}

```typescript
void main() {
  List<int> numbers = [1, 2, 3, 4];
  print(numbers.median); 
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 2.5

{% /callout %}

## Finding Maximum Value

Returns the maximum value in the list.

{% fence %}

```typescript
void main() {
  List<int> numbers = [1, 2, 3];
  print(numbers.max); 
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 3

{% /callout %}

## Finding Minimum Value

Returns the minimum value in the list.

{% fence %}

```typescript
void main() {
  List<int> numbers = [1, 2, 3];
  print(numbers.min); 
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 1

{% /callout %}

## Product

Returns the product of all elements in the list.

{% fence %}

```typescript
void main() {
  List<int> numbers = [1, 2, 3];
  print(numbers.prod); 
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 6

{% /callout %}
