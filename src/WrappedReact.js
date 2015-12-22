// wraps createElement in a way that gets rid of warnings.

/*
 * @providesModule WrappedReact
 */

var WrappedReact = require('React');

var originalCreateElement = WrappedReact.createElement;

var emptyFunction = function() {
}

WrappedReact.createElement = function() {
    var console_warn = console.warn;
    console.warn = emptyFunction;
    var element = originalCreateElement.apply(this, arguments);
    console.warn = console_warn;
    return element;
}

module.exports = WrappedReact;
