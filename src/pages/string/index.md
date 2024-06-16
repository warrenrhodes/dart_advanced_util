---
title: String
description: A collection of extension methods for the String class to add common utility functions.
---

## Title Case

A new string with the first letter of each word capitalized and all other letters lowercased.

{% fence %}

```typescript
void main() {
  print('hello world'.title);
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 Hello World

{% /callout %}

## Capitalize

A new string with the first letter capitalized and all other letters lowercased.

{% fence %}

```typescript
void main() {
  print('hello world'.capitalize);
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 Hello world

{% /callout %}

## Strip

Returns a new string with leading and trailing characters removed. If [chars] is not provided, it removes leading and trailing whitespace.

{% fence %}

```typescript
void main() {
  print('  hello  '.strip());
  print('---hello---'.strip('-'));
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 hello  
 hello

{% /callout %}

## Center

A new string with the current string centered in a string of length [width]. If the current string is already longer than [width], the original string is returned. The optional [fillChar] parameter specifies the character to use for padding.

{% fence %}

```typescript
void main() {
  print('hello'.center(10));
  print('hello'.center(10, '-'));
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

     hello     
 -----hello-----

{% /callout %}

## Format

Formats the string by replacing placeholders with provided arguments.

{% fence %}

```typescript
void main() {
  String str = 'Hello {0}, my name is {1}';
  String str2 = 'Hello {}, my name is {}';
  String str3 = 'The story of {0}, {1}, and {other}';
  print(str.format(posArgs: ['Dart', 'John']));
  print(str2.format(posArgs: ['John', 'Smith']));
  print(str3.format(posArgs: ['Bill', 'Manfred'], namedArgs: { 'other': 'Georg' }));
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 Hello Dart, my name is John  
 Hello John, my name is Smith  
 The story of Bill, Manfred, and Georg

{% /callout %}

## Char To Upper

Returns a new string with the character at the specified [index] capitalized. If [index] is not provided, it defaults to the first character of the string. Throws a [StateError] if the string is empty.

{% fence %}

```typescript
void main() {
  print('hello world'.charToUpper(0));
  print('hello world'.charToUpper(6));
  print('hello world'.charToUpper());
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 Hello world  
 hello World  
 Hello world

{% /callout %}

## Is Upper

Whether the string is uppercase or not.

{% fence %}

```typescript
void main() {
  print('HELLO WORLD'.isUpper);
  print('hello world'.isUpper);
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 true  
 false

{% /callout %}

## Is Low

Whether the string is lowercase or not.

{% fence %}

```typescript
void main() {
  print('hello world'.isLow);
  print('HELLO WORLD'.isLow);
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 true  
 false

{% /callout %}

## Count

Returns the number of non-overlapping occurrences of the [substring] in the current string.

{% fence %}

```typescript
void main() {
  print('hello world'.count('l'));
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 3

{% /callout %}

## Is Numeric

Checks if the string consists only of numeric characters.

{% fence %}

```typescript
void main() {
  print('12345'.isNumeric);
  print('hello123'.isNumeric);
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 true  
 false

{% /callout %}

## L Just

Returns a new string that is left-justified within a width.

{% fence %}

```typescript
void main() {
  print('hello'.lJust(10));
  print('hello'.lJust(10, '-'));
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 hello
 hello-----

{% /callout %}

## R Just

Returns a new string that is right-justified within a width.

{% fence %}

```typescript
void main() {
  print('hello'.rJust(10));
  print('hello'.rJust(10, '-'));
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

      hello  
 -----hello

{% /callout %}

## Is Valid Email

Checks if the current string is a valid email address.

{% fence %}

```typescript
void main() {
  print('test@example.com'.isValidEmail);
  print('invalid-email'.isValidEmail);
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 true  
 false

{% /callout %}

## Is Alphanumeric

Checks if the current string is alphanumeric.

{% fence %}

```typescript
void main() {
  print('Hello123'.isAlphanumeric);
  print('Hello World'.isAlphanumeric);
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 true  
 false

{% /callout %}

## Is Blank

Checks if the current string is blank.

{% fence %}

```typescript
void main() {
  print('   '.isBlank);
  print('not blank'.isBlank);
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 true  
 false

{% /callout %}

## Reverse

Reverses the order of the characters in the string.

{% fence %}

```typescript
void main() {
  print('hello'.reverse);
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 olleh

{% /callout %}

## To Camel Case

Converts a string to camel case.

{% fence %}

```typescript
void main() {
  print('hello_world'.toCamelCase);
  print('hello-world'.toCamelCase);
  print(''.toCamelCase);
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 helloWorld  
 helloWorld

{% /callout %}

## To Kebab Case

Converts a string to kebab case.

{% fence %}

```typescript
void main() {
  print('camelCaseString'.toKebabCase);
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 camel-case-string

{% /callout %}

## To Snake Case

Converts a camelCase string to snake_case.

{% fence %}

```typescript
void main() {
  String str = 'camelCaseExample';
  print(str.toSnakeCase);
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 camel_case_example

{% /callout %}

## Truncate

Truncates the string to the specified length and optionally adds an ellipsis.

{% fence %}

```typescript
void main() {
  print('This is a long string'.truncate(10, addEllipsis: true));
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 This is a...

{% /callout %}

## Contains Ignore Case

Checks if the current string contains the specified [other] string, ignoring case.

{% fence %}

```typescript
void main() {
  print('Hello World'.containsIgnoreCase('hello'));
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 true

{% /callout %}

## Remove Whitespaces

Removes all whitespace characters from the current string.

{% fence %}

```typescript
void main() {
  print('  Hello World  '.removeWhitespaces);
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 HelloWorld

{% /callout %}

## Remove Punctuation

Removes all punctuation characters from the given string.

{% fence %}

```typescript
void main() {
  print('Hello, world!'.removePunctuation);
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 Hello world

{% /callout %}

## Is Palindrome

Checks if the string is a palindrome.

{% fence %}

```typescript
void main() { 
    String str = "A man a plan a canal Panama";
    print(str.isPalindrome);
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 true

{% /callout %}

## Word Count

Counts the number of words in the string.

{% fence %}

```typescript
void main() { 
    String str = "Hello world, this is a test.";
    print(str.wordCount);
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 6

{% /callout %}

## Swap Case

Returns a new string with the case of each character swapped.

{% fence %}

```typescript
void main() { 
    String str = "Hello world";
    print(str.swapcase);
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 hELLO WORLD

{% /callout %}

## Is Digit

Returns true if the string contains only digits, and false otherwise.

{% fence %}

```typescript
void main() { 
    print('123'.isDigit);
    print('abc'.isDigit);
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 true  
 false

{% /callout %}

## Is URL

Returns true if the string is a valid URL, false otherwise.

{% fence %}

```typescript
void main() { 
    String url1 = 'https://www.example.com/path?name=value#fragment';
    String url2 = 'http://localhost:3000';
    String url3 = 'ftp://example.com';
    String url4 = '192.168.1.1';
    String url5 = 'smtp://mail.example.com';
    String url6 = 'custom-deeplink://example/path';
    String url7 = 'http://[2001:db8::1]:8080';
    String url8 = 'invalid_url';
   print(url1.isUrl);
   print(url2.isUrl);
   print(url3.isUrl);
   print(url4.isUrl);
   print(url5.isUrl);
   print(url6.isUrl);
   print(url7.isUrl);
   print(url8.isUrl);
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 true  
 true  
 true  
 true  
 true  
 false  
 true  
 false

{% /callout %}
