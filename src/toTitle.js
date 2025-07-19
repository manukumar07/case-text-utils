export function toTitle(str = '') {
    return str
        .toLowerCase()
        .replace(/(?:^|\s|-|_)\S/g, x => x.toUpperCase())
        .replace(/[-_]/g, ' ');
}