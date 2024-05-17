# error-constructor-verifier

A lightweight npm package to check if a value is an error constructor. Useful for validating error constructors in JavaScript applications.

## Installation

You can install error-constructor-verifier via npm:

```bash
npm install error-constructor-verifier
```

## Usage

```javascript
const isErrorConstructor = require('error-constructor-verifier');

// Check if Error is an error constructor
console.log(isErrorConstructor(Error)); // Output: true

// Check if TypeError is an error constructor
console.log(isErrorConstructor(TypeError)); // Output: true

// Check if String is an error constructor
console.log(isErrorConstructor(String)); // Output: false

// Check if 42 is an error constructor
console.log(isErrorConstructor(42)); // Output: false
```

## API

### isErrorConstructor(value)

- `value`: The value to check.
- Returns `true` if the value is an error constructor, otherwise `false`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.