const camelize = (str) => {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

function camelCaseKeys(object) {
    if(Array.isArray(object)) {
        return object.map(val => camelCaseKeys(val))
    }

    if (typeof object !== 'object' || object === null) {
        return object;
    }

    return Object.fromEntries(
        Object.entries(object).map(([key, value]) => [
        camelize(key),
        camelCaseKeys(value),
        ]),
    );
}

console.log(camelCaseKeys({ foo_bar: true }));
// { fooBar: true }

console.log(camelCaseKeys({ foo_bar: true, bar_baz: { baz_qux: '1' } }));
// // { fooBar: true, barBaz: { bazQux: '1' } }

console.log(camelCaseKeys([{ baz_qux: true }, { foo: true, bar: [{ foo_bar: 'hello' }] }]));
// [{ bazQux: true }, { foo: true, bar: [{ fooBar: 'hello' }] }]


// console.log(Object.values(["baz_qux", { foo: true, bar: [{ foo_bar: 'hello' }] }]));
// console.log(Object.keys({ foo_bar: true, bar_baz: { baz_qux: '1' } }));