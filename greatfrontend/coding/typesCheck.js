function isBoolean(value) {
  return value === true || value === false
}

function isNumber(value) {
  return typeof(value) === "number"
}

function isNull(value) {
  return value === null;
}

function isString(value) {
  return typeof(value) === "string"
}

function isSymbol(value) {
  return typeof(value) === "symbol"
}

function isUndefined(value) {
  return value === undefined
}

function isArray(value) {
  return Array.isArray(value);
}

function isFunction(value) {
    return typeof value === 'function'
}

function isObject(value) {
  if (value == null) {
    return false;
  }

  const type = typeof value;
  return type === 'object' || type === 'function';
}

function isPlainObject(value) {
    if (value == null) {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    return (prototype === null || prototype.constructor === Object);
}

//for object -
// We need to
// Test the object is an Object.
// Test the object is not null.
// Test it is not an array.
// Test it is not a function.



console.log(isBoolean('true'));
console.log(isBoolean([1, 2, 3]));
console.log(isBoolean(new Date()));
console.log(isBoolean(new Error()));
console.log(isBoolean({ a: 1 }));
console.log(isBoolean(/x/));
console.log(isBoolean('a'));
console.log(isBoolean(null));
console.log(isBoolean(undefined));
console.log(isBoolean(1));
console.log(isBoolean(NaN));
console.log(isBoolean(Symbol('symbol')));