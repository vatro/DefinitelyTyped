// Type definitions for strman 2.0
// Project: https://github.com/dleitee/strman#readme
// Definitions by: Adam Bergman <https://github.com/adambrgmn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function append(value: string, ...appends: string[]): string;
export function appendArray(value: string, appends: string[]): string;
export function at(value: string, index: number): string;
export function base64decode(value: string): string;
export function base64encode(value: string): string;
export function between(value: string, start: string, end: string): string[];
export function binDecode(value: string): string;
export function binEncode(value: string): string;
export function chars(value: string): string[];
export function collapseWhitespace(value: string): string;
export function compare(stringA: string, stringB: string): number;
export function contains(value: string, needle: string, caseSensitive?: boolean): boolean;
export function containsAll(value: string, needle: string[], caseSensitive?: boolean): boolean;
export function containsAny(value: string, needle: string[], caseSensitive?: boolean): boolean;
export function countSubstr(value: string, substr: string, caseSensitive?: boolean, allowOverlapping?: boolean): number;
export function decDecode(value: string): string;
export function decEncode(value: string): string;
export function endsWith(value: string, search: string, position?: number, caseSensitive?: boolean): boolean;
export function ensureLeft(value: string, substr: string, caseSensitive?: boolean): string;
export function ensureRight(value: string, substr: string, caseSensitive?: boolean): string;
export function equal(stringA: string, stringB: string): boolean;
export function first(value: string, n: number): string;
export function format(value: string, ...params: string[]): string;
export function hexDecode(value: string): string;
export function hexEncode(value: string): string;
export function htmlDecode(value: string): string;
export function htmlEncode(value: string): string;
export function inequal(stringA: string, stringB: string): boolean;
export function insert(value: string, substr: string, position: number): string;
export function isLowerCase(value: string): boolean;
export function isString(value: any): boolean;
export function isString(value: any): value is string;
export function isUpperCase(value: string): boolean;
export function last(value: string, n: number): string;
export function lastIndexOf(value: string, needle: string, offset?: number, caseSensitive?: boolean): string;
export function leftPad(value: string, length: number, char?: string): string;
export function leftTrim(value: string, char?: string): string;
export function prepend(value: string, ...prepends: string[]): string;
export function prependArray(value: string, prepends: string[]): string;
export function removeEmptyStrings(strings: Array<string | undefined | null>): string[];
export function removeLeft(value: string, prefix: string, caseSensitive?: boolean): string;
export function removeNonWords(value: string, replaced?: string): string;
export function removeRight(value: string, suffix: string, caseSensitive?: boolean): string;
export function removeSpaces(value: string, replaced?: string): string;
export function repeat(string: string, multiplier: number): string;
export function replace(
    value: string,
    search: string,
    newValue: string,
    caseSensitive?: boolean,
    multiline?: boolean,
): string;
export function reverse(value: string): string;
export function rightPad(value: string, length: number, char?: string): string;
export function rightTrim(value: string, char?: string): string;
export function safeTruncate(value: string, length: number, append?: string): string;
export function shuffle(value: string): string;
export function slice(value: string, beginSlice: number, endSlice: number): string;
export function slugify(value: string): string;
export function split(value: string, separator: string, limit?: number): string[];
export function startsWith(value: string, search: string, position?: number, caseSensitive?: boolean): boolean;
export function substr(value: string, start: number, length: number): string;
export function surround(value: string, substr: string, substrRight?: string): string;
export function toCamelCase(value: string): string;
export function toDecamelize(value: string): string;
export function toKebabCase(value: string): string;
export function toLowerCase(value: string): string;
export function toSnakeCase(value: string): string;
export function toStudlyCaps(value: string): string;
export function toUpperCase(value: string): string;
export function transliterate(value: string): string;
export function trim(value: string, char?: string): string;
export function truncate(value: string, length: number, append?: string): string;
export function urlDecode(value: string): string;
export function urlEncode(value: string): string;
