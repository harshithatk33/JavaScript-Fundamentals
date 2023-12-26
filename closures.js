/**
 * JavaScript Closures:
 *      In javascript, closures are inner functions which still have access to
 * outer function's scope, even after the outer function has returned control.
 */

// Example 1
const outFunc = (() => {
    let _counter = 0;
    return (inFunc = () => {
        return (_counter += 1);
    });
})();

console.log(outFunc());
console.log(outFunc());
console.log(outFunc());

// Example 2
