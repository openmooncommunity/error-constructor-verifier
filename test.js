const isErrorConstructor = require('./index');

test('Checks if an error constructor is correctly detected', () => {
    expect(isErrorConstructor(Error)).toBe(true);
    expect(isErrorConstructor(TypeError)).toBe(true);
    expect(isErrorConstructor(String)).toBe(true);
    expect(isErrorConstructor(42)).toBe(false);
});
