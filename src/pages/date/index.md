---
title: DateTime Extensions
description: A collection of extension methods for the DateTime class to add common utility functions.
---

{% callout appearance="danger" disableTitle=false%}
Note: The date extenxions cannot be tested directly on this site, as they require an additional import,
 which is not yet supported. for more tests import directly into your project the package
 [dart_advanced_utils](https://pub.dev/packages/dart_advanced_utils) or run.

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

## Checking if a Date is Today

Determines if a DateTime instance is today's date.

{% fence %}

```typescript
void main() {
  DateTime date = DateTime.now();
  print(date.isToday); 
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 true

{% /callout %}

## Checking if a Date is Yesterday

Determines if a DateTime instance is yesterday's date.

{% fence %}

```typescript
void main() {
  DateTime date = DateTime.now().subtract(Duration(days: 1));
  print(date.isYesterday); 
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 true

{% /callout %}

## Checking if a Date is Tomorrow

Determines if a DateTime instance is tomorrow's date.

{% fence %}

```typescript
void main() {
  DateTime date = DateTime.now().add(Duration(days: 1));
  print(date.isTomorrow); 
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 true

{% /callout %}

## Checking if a Date is in the Past

Determines if a DateTime instance is in the past.

{% fence %}

```typescript
void main() {
    final dateTime = DateTime(2000);
    final bool result = dateTime.isInPast();
    print(date.isInPast); 
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 true

{% /callout %}

## Checking if a Date is in the Future

Determines if a DateTime instance is in the future.

{% fence %}

```typescript
void main() {
  DateTime date = DateTime.now().add(Duration(days: 1));
  print(date.isInFuture); 
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 true

{% /callout %}

## Checking if a Date is in a Range

Checks if a DateTime instance is within a specified range.

{% fence %}

```typescript
void main() {
  final startDate = DateTime(2024, 5, 1);
  final endDate = DateTime(2026, 5, 31);
  final currentDate = DateTime.now();
  final bool result = currentDate.isDateInRange(startDate, endDate);
  print(result);
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 true

{% /callout %}

## Getting Localized Weekday

Returns the localized weekday name for a DateTime instance.

{% fence %}

```typescript
void main() {
  final date = DateTime.parse('2024-05-27T14:31:57.505Z');
  print(date.localizedWeekday('en_US')); 
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 Monday

{% /callout %}

## Getting Localized Month

Returns the localized month name for a DateTime instance.

{% fence %}

```typescript
void main() {
  final date = DateTime.parse('2024-05-27T14:31:57.505Z');
  print(date.localizedMonth('en_US')); 
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 May

{% /callout %}

## Checking if a Duration has Passed

Checks if a specified duration has passed since the DateTime instance.

{% fence %}

```typescript
void main() {
  final date = DateTime.parse('2024-05-27T14:31:57.505Z');
  final bool result = date.hasDurationPassed(Duration(hours: 5, minutes: 30));
  print(result);
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 true

{% /callout %}

## Adding Business Days

Adds a specified number of business days to a DateTime instance.

{% fence %}

```typescript
void main() {
final startDate = DateTime.parse("2024-05-30T14:31:57.505Z");
 final resultDate = startDate.addBusinessDays(2);
  print(resultDate);
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

2024-06-03 14:31:57.505Z

{% /callout %}

## Subtracting Business Days

Subtracts a specified number of business days from a DateTime instance.

{% fence %}

```typescript
void main() {
  final startDate = DateTime.parse("2024-05-30T14:31:57.505Z");
  DateTime newDate = date.subtractBusinessDays(2);
  print(newDate); 
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

2024-05-27T14:31:57.505Z

{% /callout %}

## Getting Start of Month

Returns the start of the month for a DateTime instance.

{% fence %}

```typescript
void main() {
  final date = DateTime(2024, 5, 15);
  inal startOfMonth = date.startOfMonth;
  print(date.startOfMonth); 
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 2024-05-01 00:00:00.000

{% /callout %}

## Getting End of Month

Returns the end of the month for a DateTime instance.

{% fence %}

```typescript
void main() {
  final date = DateTime(2024, 5, 15);
  final endOfMonth = date.endOfMonth;
  print(date.endOfMonth); 
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 2024-05-31 23:59:59.999

{% /callout %}

## Checking for Leap Year

Checks if the year of a DateTime instance is a leap year.

{% fence %}

```typescript
void main() {
  final date = DateTime(2024, 5, 15);
  final isLeap = date.hasALeapYear;
  print(isLeap); 
}
```

{% /fence %}
Output:
{% callout appearance="note" disableTitle=true%}

 true

{% /callout %}
