export function toConstant(str = '') {
    return str
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .replace(/[-\s]/g, '_')
        .toUpperCase();
}