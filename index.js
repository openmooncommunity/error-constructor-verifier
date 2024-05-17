/**
 * Checks if the provided value is an error constructor.
 * @param {*} value The value to check.
 * @returns {boolean} true if the value is an error constructor, otherwise false.
 */
function isErrorConstructor(value) {
    try {
        // Attempt to instantiate an error object with the provided value.
        new value();
        return true;
    } catch (error) {
        return false;
    }
}

module.exports = isErrorConstructor;
