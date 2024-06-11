import { PageStringData } from "@/lib/utils";


export const stringData: { title: string, link: string, decription: string, code: string, output: string }[] = [
    {
        link: '/string#capitalize',
        title: PageStringData.capitalize,
        decription: "a new string with the first letter of each word capitalized and all other letters lowercased.",
        code: `import 'package:dart_advanced_utils/dart_advanced_utils.dart';

void main(){ 
    print('hello world'.title);
};`,
        output: 'Hello World'
    },
    {
        link: '/string#strip',
        title: PageStringData.strip,
        decription: "Returns a new string with leading and trailing characters removed. If [chars] is not provided, it removes leading and trailing whitespace.",
        code: `import 'package:dart_advanced_utils/dart_advanced_utils.dart';

void main(){ 
    print('  hello  '.strip());
    print('---hello---'.strip('-'));
};`,
        output: 'hello\nhello'
    },
    {
        title: PageStringData.center,
        link: '/string#center',
        decription: `a new string with the current string centered in a string of length [width]. 
        If the current string is already longer than [width], the original string is returned. 
        The optional [fillChar] parameter specifies the character to use for padding.`,
        code: `import 'package:dart_advanced_utils/dart_advanced_utils.dart';

void main(){ 
    print('hello'.center(10));
    print('hello'.center(10, '-'));
};`,
        output: "'     hello     '\n'-----hello-----'"
    },
    {
        title: PageStringData.format,
        link: '/string#format',
        decription: `Formats the string by replacing placeholders with provided arguments.`,
        code: `import 'package:dart_advanced_utils/dart_advanced_utils.dart';

void main(){ 
   String str = 'Hello {0}, my name is {1}';
   String str2 = 'Hello {}, my name is {}';
   String str3 = 'The story of {0}, {1}, and {other}';
   print(str.format(posArgs: ['Dart', 'John']));
   print(str2.format(posArgs: ['Jhon', 'Smith']));
   print(str3.format(posArgs: ['Bill', 'Manfred'],namedArgs: { 'other': 'Georg' }));
};`,
        output: "Hello Dart, my name is John.\nHello Jhon, my name is Smith.\nThe story of Bill, Manfred, and Georg."
    },
    {
        title: PageStringData.charToUpper,
        link: '/string#charToUpper',
        decription: `Returns a new string with the character at the specified [index] capitalized. 
        If [index] is not provided, it defaults to the first character of the string. 
        Throws a [StateError] if the string is empty.`,
        code: `import 'package:dart_advanced_utils/dart_advanced_utils.dart';

void main(){ 
    print('hello world'.charToUpper(0));
    print('hello world'.charToUpper(6));
    print('hello world'.charToUpper());
};`,
        output: "'Hello world'\n'hello World'\n'Hello world'"
    },
    {
        title: PageStringData.isUpper,
        link: '/string#isUpper',
        decription: `Whether the string is uppercase or not.`,
        code: `import 'package:dart_advanced_utils/dart_advanced_utils.dart';

void main(){ 
    print('HELLO WORLD'.isUpper);
    print('hello world'.isUpper);
};`,
        output: 'true\nfalse'
    },
    {
        title: PageStringData.isLow,
        link: '/string#isLow',
        decription: `Whether the string is lowercase or not.`,
        code: `import 'package:dart_advanced_utils/dart_advanced_utils.dart';

void main(){ 
    print('hello world'.isLow);
    print('HELLO WORLD'.isLow);
};`,
        output: 'true\nfalse'
    },
    {
        title: PageStringData.count,
        link: '/string#count',
        decription: `Returns the number of non-overlapping occurrences of the [substring] in the current string.`,
        code: `import 'package:dart_advanced_utils/dart_advanced_utils.dart';

void main(){ 
    print('hello world'.count('l'));
};`,
        output: '3'
    },
    {
        title: PageStringData.isNumeric,
        link: '/string#isNumeric',
        decription: `Checks if the string consists only of numeric characters.`,
        code: `import 'package:dart_advanced_utils/dart_advanced_utils.dart';

void main(){ 
    print('12345'.isNumeric);
    print('hello123'.isNumeric);
};`,
        output: 'true\nfalse'
    },
    {
        title: PageStringData.lJust,
        link: '/string#lJust',
        decription: `Returns a new string that is left-justified within a width.`,
        code: `import 'package:dart_advanced_utils/dart_advanced_utils.dart';

void main(){ 
    print('hello'.lJust(10));
    print('hello'.lJust(10, '-'));
};`,
        output: "'hello     '\n'hello-----'"
    },
    {
        title: PageStringData.rJust,
        link: '/string#rJust',
        decription: `Returns a new string that is right-justified within a width.`,
        code: `import 'package:dart_advanced_utils/dart_advanced_utils.dart';

void main(){ 
    print('hello'.rJust(10));
    print('hello'.rJust(10, '-'));
};`,
        output: "'     hello'\n'-----hello'"
    },
    {
        title: PageStringData.isValidEmail,
        link: '/string#isValidEmail',
        decription: `Checks if the current string is a valid email address.`,
        code: `import 'package:dart_advanced_utils/dart_advanced_utils.dart';

void main(){ 
    print('test@example.com'.isValidEmail);
    print('invalid-email'.isValidEmail);
};`,
        output: 'true\nfalse'
    },
    {
        title: PageStringData.isAlphanumeric,
        link: '/string#isAlphanumeric',
        decription: `Checks if the current string is alphanumeric.`,
        code: `import 'package:dart_advanced_utils/dart_advanced_utils.dart';

void main(){ 
    print('Hello123'.isAlphanumeric);
    print('Hello World'.isAlphanumeric);
};`,
        output: 'true\nfalse'
    },
    {
        title: PageStringData.isBlank,
        link: '/string#isBlank',
        decription: `Checks if the current string is blank.`,
        code: `import 'package:dart_advanced_utils/dart_advanced_utils.dart';

void main(){ 
    print('   '.isBlank);
    print('not blank'.isBlank);
};`,
        output: 'true\nfalse'
    },
    {
        title: PageStringData.reverse,
        link: '/string#reverse',
        decription: `Reverses the order of the characters in the string.`,
        code: `import 'package:dart_advanced_utils/dart_advanced_utils.dart';

void main(){ 
    print('hello'.reverse);
};`,
        output: 'olleh'
    },
    {
        title: PageStringData.toCamelCase,
        link: '/string#toCamelCase',
        decription: `Converts a string to camel case.`,
        code: `import 'package:dart_advanced_utils/dart_advanced_utils.dart';

void main(){ 
    print('hello_world'.toCamelCase);
    print('hello-world'.toCamelCase);
    print(''.toCamelCase);
};`,
        output: 'helloWorld\nhelloWorld\n'
    },
    {
        title: PageStringData.toKebabCase,
        link: '/string#toKebabCase',
        decription: `Converts a string to kebab case.`,
        code: `import 'package:dart_advanced_utils/dart_advanced_utils.dart';

void main(){ 
    print('camelCaseString'.toKebabCase);
};`,
        output: 'camel-case-string'
    },
    {
        title: PageStringData.toSnakeCase,
        link: '/string#toSnakeCase',
        decription: `Converts a camelCase string to snake_case.`,
        code: `import 'package:dart_advanced_utils/dart_advanced_utils.dart';

void main(){ 
    String str = "camelCaseExample";
    print(str.toSnakeCase);
};`,
        output: 'camel_case_example'
    },
    {
        title: PageStringData.truncate,
        link: '/string#truncate',
        decription: `Truncates the string to the specified length and optionally adds an ellipsis.`,
        code: `import 'package:dart_advanced_utils/dart_advanced_utils.dart';

void main(){ 
    print('This is a long string'.truncate(10, addEllipsis: true));
};`,
        output: 'This is a...'
    },
    {
        title: PageStringData.containsIgnoreCase,
        link: '/string#containsIgnoreCase',
        decription: `Checks if the current string contains the specified [other] string, ignoring case.`,
        code: `import 'package:dart_advanced_utils/dart_advanced_utils.dart';

void main(){ 
    print('Hello World'.containsIgnoreCase('hello'));
};`,
        output: 'true'
    },
    {
        title: PageStringData.removeWhitespaces,
        link: '/string#removeWhitespaces',
        decription: `Removes all whitespace characters from the current string.`,
        code: `import 'package:dart_advanced_utils/dart_advanced_utils.dart';

void main(){ 
    print('  Hello World  '.removeWhitespaces);
};`,
        output: 'HelloWorld'
    },
    {
        title: PageStringData.removePunctuation,
        link: '/string#removePunctuation',
        decription: `Removes all punctuation characters from the given string.`,
        code: `import 'package:dart_advanced_utils/dart_advanced_utils.dart';

void main(){ 
    print('Hello, world!'.removePunctuation);
};`,
        output: 'Hello world'
    },
    {
        title: PageStringData.isPalindrome,
        link: '/string#isPalindrome',
        decription: `Checks if the string is a palindrome.`,
        code: `import 'package:dart_advanced_utils/dart_advanced_utils.dart';

void main(){ 
    String str = "A man a plan a canal Panama";
    print(str.isPalindrome);
};`,
        output: 'true'
    },
    {
        title: PageStringData.wordCount,
        link: '/string#wordCount',
        decription: `Counts the number of words in the string.`,
        code: `import 'package:dart_advanced_utils/dart_advanced_utils.dart';

void main(){ 
    String str = "Hello world, this is a test.";
    print(str.wordCount);
};`,
        output: '6'
    },
    {
        title: PageStringData.swapcase,
        link: '/string#swapcase',
        decription: `Returns a new string with the case of each character swapped.`,
        code: `import 'package:dart_advanced_utils/dart_advanced_utils.dart';

void main(){ 
    String str = "Hello world";
    print(str.swapcase);
};`,
        output: 'hELLO WORLD'
    },
    {
        title: PageStringData.isDigit,
        link: '/string#isDigit',
        decription: `Returns true if the string contains only digits, and false otherwise.`,
        code: `import 'package:dart_advanced_utils/dart_advanced_utils.dart';

void main(){ 
    print('123'.isDigit);
    print('abc'.isDigit);
};`,
        output: 'true\nfalse'
    },
    {
        title: PageStringData.isUrl,
        link: '/string#isUrl',
        decription: `Returns true if the string is a valid URL, false otherwise.`,
        code: `import 'package:dart_advanced_utils/dart_advanced_utils.dart';

void main(){ 
    print('https://www.example.com'.isUrl);
    print('ftp://example.com'.isUrl);
    print('example.com'.isUrl);
};`,
        output: 'true\ntrue\nfalse'
    },
];