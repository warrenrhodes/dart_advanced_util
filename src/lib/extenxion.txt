extension NullStringExtensions on String? {

  bool get isNullOrEmpty => this == null || this!.isEmpty;
}
extension StringFormat on String {

  String strip([String? chars]) {
    if (chars != null) {
      return replaceAll(RegExp('^[$chars]+|[$chars]+\$'), '');
    } else {
      return trim();
    }
  }

  String get title {
    if (isEmpty) return this;

    final words = split(' ');
    final titleWords = words.map((word) {
      if (word.isEmpty) return '';
      return '${word[0].toUpperCase()}${word.substring(1).toLowerCase()}';
    });

    return titleWords.join(' ');
  }
  String charToUpper([int? index]) {
    if (trim().isEmpty) throw StateError('Empty string');

    return replaceFirst(this[index ?? 0], this[index ?? 0].toUpperCase());
  }

  bool get isUpper => trim().toUpperCase() == this;
  bool get isLow => trim().toLowerCase() == this;
  String get capitalize {
    if (isEmpty) return this;
    return this[0].toUpperCase() + substring(1);
  }  
  String center(int width, [String fillChar = ' ']) {
    if (width <= length) return this;
    int totalPadding = width - length;
    int leftPadding = totalPadding ~/ 2;
    int rightPadding = totalPadding - leftPadding;
    return fillChar * leftPadding + this + fillChar * rightPadding;
  }
  int count(String substring) {
    return RegExp(substring).allMatches(this).length;
  }
  bool get isNumeric => RegExp(r'^[0-9]+$').hasMatch(this);
  String lJust(int width, [String fillChar = ' ']) {
    if (width <= length) return this;
    return this + fillChar * (width - length);
  }
  String rJust(int width, [String fillChar = ' ']) {
    if (width <= length) return this;
    return fillChar * (width - length) + this;
  }
  bool get isValidEmail {
    if (isEmpty) return false;
    final emailRegExp = RegExp(r'^[^@]+@[^@]+\.[^@]+');
    return emailRegExp.hasMatch(this);
  }
  bool get isAlphanumeric {
    if (isEmpty) return false;
    final alphanumericRegExp = RegExp(r'^[a-zA-Z0-9]+$');
    return alphanumericRegExp.hasMatch(this);
  }
  bool get isBlank => trim().isEmpty;

  String get reverse => split('').reversed.join('');
  String get toCamelCase {
    if (isEmpty) return this;
    String camelCaseString =
        replaceAllMapped(RegExp(r'\s'), (match) => '').toLowerCase();
    final regExp = RegExp(r'[_-](\w)');
    camelCaseString = camelCaseString.replaceAllMapped(regExp, (match) {
      return match.group(1)!.toUpperCase();
    });
    return camelCaseString;
  }
  String get toKebabCase {
    if (isEmpty) return this;
    return replaceAllMapped(RegExp(r'\s'), (match) => '')
        .replaceAllMapped(
          RegExp(r'([a-z])([A-Z])'),
          (match) => '${match[1]}-${match[2]}',
        )
        .toLowerCase();
  }
  String get toSnakeCase {
    return replaceAllMapped(RegExp(r'\s'), (match) => '')
        .replaceAllMapped(RegExp(r'[A-Z]'), (match) {
      return '_${match.group(0)!.toLowerCase()}';
    }).replaceFirstMapped(RegExp(r'^_'), (match) => '');
  }
  String truncate(int length, {bool addEllipsis = false}) {
    if (isEmpty) return this;
    if (this.length <= length) return this;
    return substring(0, length) + (addEllipsis ? '...' : '');
  }
  bool containsIgnoreCase(String other) {
    if (isEmpty) return false;
    return toLowerCase().contains(other.toLowerCase());
  }
  String get removeWhitespaces {
    if (isEmpty) return this;
    return replaceAll(RegExp(r'\s+'), '');
  }
  String get removePunctuation => replaceAll(RegExp(r'[^\w\s]'), '');
  bool get isPalindrome {
    String cleanedString = toLowerCase().replaceAll(RegExp(r'[^a-z0-9]'), '');
    return cleanedString == cleanedString.split('').reversed.join('');
  }
  int get wordCount {
    return trim().split(RegExp(r'\s+')).length;
  }

  String get swapcase {
    if (isEmpty) return this;
    return split('').map((char) {
      if (char == char.toUpperCase()) return char.toLowerCase();
      return char.toUpperCase();
    }).join('');
  }

  bool get isDigit => RegExp(r'^[0-9]+$').hasMatch(this);

  String format(
      {List<dynamic>? posArgs, Map<String, dynamic>? namedArgs, String? sep}) {
    String result = this;

    if (posArgs != null) {
      for (int i = 0; i < posArgs.length; i++) {
        result = result
            .replaceAll('{$i}', posArgs[i].toString())
            .replaceFirst('{}', posArgs[i].toString());
      }
    }

    if (namedArgs != null) {
      namedArgs.forEach((key, value) {
        result = result.replaceAll('{$key}', value.toString());
      });
    }

    return result.split(' ').join(sep ?? ' ');
  }

  bool get isUrl => RegExp(r'^(([\w+-.]+):\/\/)?'
          r'((([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})|'
          r'localhost|'
          r'\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|'
          r'\[[0-9a-fA-F:]+\])'
          r'(:\d+)?'
          r'(\/[-a-zA-Z0-9@:%._\+~#=]*)*'
          r'(\?[;&a-zA-Z0-9%_.~+=-]*)?'
          r'(\#[-a-zA-Z0-9_]*)?$')
      .hasMatch(this);
}
extension GenericListExtensions<E> on Iterable<E> {
  List<E> operator *(int data) {
    List<E> result = [];
    for (int i = 0; i < data; i++) {
      result.addAll(this);
    }
    return result;
  }

  List<E> operator +(List<E> data) {
    return [...this, ...data];
  }
}

extension IntList<T extends num> on Iterable<T> {

  num get sum => length == 0
      ? throw StateError('No element')
      : fold(0, (current, next) => current + next);

  num get average =>
      length == 0 ? throw StateError('No element') : sum / length;
  num get median {
    if (length == 0) {
      throw Exception('List is empty');
    }
    var sorted = [...this]..sort();
    if (length % 2 == 0) {
      return (sorted[length ~/ 2 - 1] + sorted[length ~/ 2]) / 2;
    }
    return sorted[length ~/ 2];
  }

  T get max => length == 0
      ? throw StateError('No element')
      : reduce((curr, next) => curr > next ? curr : next);
  T get min => length == 0
      ? throw StateError('No element')
      : reduce((curr, next) => curr < next ? curr : next);

  num get prod => length == 0
      ? throw StateError('No element')
      : fold(1, (current, next) => current * next);
}

void fprint(Object? args,
    {String sep = ' ', String end = '\n', bool unpack = false}) {
  String output;
  if (args is Map) {
    if (unpack) {
      output = args.keys.join(sep);
    } else {
      output = args.toString();
    }
  } else if (args is Iterable) {
    output = unpack ? args.join(sep) : args.toString();
  } else {
    output = args.toString();
  }

  output += end;

  print(output);
}
