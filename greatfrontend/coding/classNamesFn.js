function classNames(...args) {
    const classes = new Set();
    args.forEach(arg => {
        if(!arg) {
            return;
        }
        const argType = typeof arg;
        if(argType === 'string' || argType === 'number') {
            classes.add(arg)
            return;
        }
        if(Array.isArray(arg)) {
            classes.add(classNames(...arg));
            return;
        }
        if(argType === 'object') {
            for (const key in arg) {
                if (arg[key]) {
                    classes.add(key);
                }
            }
        }
    })
    let output = "";
    classes.forEach(element => {
        if(output) {
            output = output + ' ' + element
        } else {
            output = element
        }
    })
    return output;
}



// console.log(classNames('foo', 'bar')); // 'foo bar'
// console.log(classNames('foo', { bar: true })); // 'foo bar'
// console.log(classNames({ 'foo-bar': true })); // 'foo-bar'
// console.log(classNames({ 'foo-bar': false })); // ''
// console.log(classNames({ foo: true }, { bar: true }, {foo: true})); // 'foo bar'
// console.log(classNames({ foo: true, bar: true })); // 'foo bar'
// console.log(classNames({ foo: true, bar: false, qux: true })); // 'foo qux'
// console.log(classNames('a', ['b', { c: true, d: false }])); // 'a b c'
// console.log(classNames(
//   'foo',
//   {
//     bar: true,
//     duck: false,
//   },
//   'baz',
//   { quux: true },
// ) // 'foo bar baz quux'
// )

// console.log(classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, '')); // 'bar 1'

