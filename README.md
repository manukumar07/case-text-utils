# 🔠 text-case-utils

A tiny utility (2KB) for converting between string cases: camelCase, snake_case, kebab-case, PascalCase, UPPERCASE, lowercase.

## 📦 Installation

```bash
npm i text-case-utils
```

## ✨ Why use `text-case-utils`?

✅ Lightweight (under 2KB)  
✅ Zero dependencies  
✅ Written in clean ES modules  
✅ Works in both Node.js & browser  
✅ Developer-friendly API  
✅ Supports 12+ popular case formats  
✅ One-liner conversions with `convertCase()`

## 🛠 Usage

```
import {
  toCamel,
  toSnake,
  toKebab,
  toPascal,
  toUpper,
  toLower,
  toTitle,
  toCapital,
  toConstant,
  toDot,
  toPath,
  convertCase
} from 'text-case-utils';

toCamel('hello_world-text');     // "helloWorldText"
toSnake('helloWorldText');       // "hello_world_text"
toKebab('helloWorldText');       // "hello-world-text"
toPascal('hello_world-text');    // "HelloWorldText"
toUpper('hello world');          // "HELLO WORLD"
toLower('HELLO WORLD');          // "hello world"
toTitle('hello-world_case');     // "Hello World Case"
toCapital('hello world');        // "Hello world"
toConstant('helloWorld');        // "HELLO_WORLD"
toPath('helloWorldCase');        // "hello/world/case"

// 🔁 One-liner universal converter
convertCase('hello-world_case', 'pascal'); // "HelloWorldCase"
convertCase('helloWorld', 'dot');          // "hello.world"

```

## ✅ Output Preview

```
console.log(toCamel('hello_world-case'));
// → "helloWorldCase"

console.log(convertCase('my-key_name', 'constant'));
// → "MY_KEY_NAME"
```
