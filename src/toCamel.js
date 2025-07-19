export function toCamel(str = '') {
    return str
        .replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
        .replace(/^(.)/, m => m.toLowerCase());
}