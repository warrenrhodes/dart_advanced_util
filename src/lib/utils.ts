import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export enum PageData {
  Home = "home",
  String = "string",
}

export enum PageStringData {
  capitalize = "capitalize",
  center = "center",
  count = "count",
  isnumeric = "isnumeric",
  strip = "strip",
  charToUpper = "charToUpper",
  isUpper = "isUpper",
  isLow = "isLow",
  isNumeric = "isNumeric",
  lJust = "lJust",
  rJust = "rJust",
  isValidEmail = "isValidEmail",
  isAlphanumeric = "isAlphanumeric",
  isBlank = "isBlank",
  reverse = "reverse",
  toCamelCase = "toCamelCase",
  toKebabCase = "toKebabCase",
  toSnakeCase = "toSnakeCase",
  truncate = "truncate",
  containsIgnoreCase = "containsIgnoreCase",
  removeWhitespaces = "removeWhitespaces",
  removePunctuation = "removePunctuation",
  isPalindrome = "isPalindrome",
  wordCount = "wordCount",
  swapcase = "swapcase",
  isDigit = "isDigit",
  format = "format",
  isUrl = "isUrl",
}

export type LowPageData = PageStringData;
