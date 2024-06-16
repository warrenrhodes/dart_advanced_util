---
title: Overview
---

The **Dart Advanced Utils** package enhances Dart's standard library with a variety of extensions. Here are some examples of how to use these extensions to improve your code.

### String Extensions

#### Null and Empty Check

The `NullStringExtensions` extension provides a convenient way to check if a string is null or empty.

```typescript
String? nullString;
String emptyString = '';

print(nullString.isNullOrEmpty); 
print(emptyString.isNullOrEmpty); 
```

#### Strip Characters

The `strip` method removes specified leading and trailing characters from a string.

```typescript
String text = "---Hello, World!---";
print(text.strip('-')); 
```

#### Title Case

The `title` property capitalizes the first letter of each word in a string.

```typescript
String text = "hello world";
print(text.title); 
```

#### Character to Upper

The `charToUpper` method capitalizes the character at the specified index.

```typescript
String text = "hello";
print(text.charToUpper(1)); 
```

### List Extensions

#### Repeating a List

You can use the `*` operator to repeat a list multiple times.

```typescript
List<int> numbers = [1, 2, 3];
print(numbers * 3); 
```

#### Adding Lists

The `+` operator concatenates two lists.

```typescript
List<int> list1 = [1, 2, 3];
List<int> list2 = [4, 5, 6];
print(list1 + list2); 
```

#### Calculating Sum and Average

The `sum` and `average` properties calculate the sum and average of elements in a numeric list.

```typescript
List<int> numbers = [1, 2, 3, 4, 5];
print(numbers.sum); 
print(numbers.average); 
```

### Date Extensions

The **Dart Advanced Utils** package also includes various extensions for DateTime. Here are a few examples:

#### Check if a Date is Today

```typescript
DateTime today = DateTime.now();
print(today.isToday()); 
```

#### Check if a Date is in the Past

```typescript
DateTime pastDate = DateTime(2000, 1, 1);
print(pastDate.isInPast); 
```

### Custom Functions

The package also includes custom functions like `fprint`, which is a formatted print function.

```typescript
Map<String, String> data = {'name': 'John', 'age': '30'};
fprint(data, sep: ', '); 
```

### Overwriting Extensions

If you want to overwrite an existing extension method, you can redefine the extension with the same method name. Here is an example of how to overwrite the `capitalize` method of the `String` extension.

#### Overwrite Example

```typescript
extension CustomStringExtensions on String {
  @override
  String get capitalize {
    if (isEmpty) return this;
    return '${this[0].toUpperCase()}${substring(1).toLowerCase()}';
  }
}

void main() {
  String text = "hello WORLD";
  print(text.capitalize); 
}
```

### Examples

Here are some practical examples using the custom and overwritten extensions from the **Dart Advanced Utils** package.

```typescript
import 'package:dart_advanced_utils/dart_advanced_utils.dart';

void main() {
  // Using String extensions
  String? email = "example@example.com";
  print(email.isValidEmail); 

  String text = "  hello world  ";
  print(text.strip()); 
  print(text.capitalize); 

  // Using List extensions
  List<int> numbers = [1, 2, 3, 4, 5];
  print(numbers.sum); 
  print(numbers.median); 

  // Using DateTime extensions
  DateTime date = DateTime.now();
  print(date.isToday()); 
}
```

By using and customizing these extensions, you can make your Dart code more readable and concise. The **Dart Advanced Utils** package provides a flexible foundation that can be tailored to fit your specific needs.
