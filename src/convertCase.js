import { toCamel } from './toCamel.js';
import { toSnake } from './toSnake.js';
import { toKebab } from './toKebab.js';
import { toPascal } from './toPascal.js';
import { toLower } from './toLower.js';
import { toUpper } from './toUpper.js';
import { toTitle } from './toTitle.js';
import { toCapital } from './toCapital.js';
import { toConstant } from './toConstant.js';
import { toPath } from './toPath.js';

export function convertCase(str = '', type = 'camel') {
    switch (type.toLowerCase()) {
        case 'camel': return toCamel(str);
        case 'snake': return toSnake(str);
        case 'kebab': return toKebab(str);
        case 'pascal': return toPascal(str);
        case 'lower': return toLower(str);
        case 'upper': return toUpper(str);
        case 'title': return toTitle(str);
        case 'capital': return toCapital(str);
        case 'constant': return toConstant(str);
        case 'path': return toPath(str);
        default: throw new Error(`Unsupported case type: ${type}`);
    }
}
