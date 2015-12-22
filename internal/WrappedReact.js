// wraps createElement in a way that gets rid of warnings.

/*
 * @providesModule WrappedReact
 */

'use strict';

var WrappedReact = require('./React');

var originalCreateElement = WrappedReact.createElement;

var emptyFunction = function emptyFunction() {};

WrappedReact.createElement = function () {
    var console_warn = console.warn;
    console.warn = emptyFunction;
    var element = originalCreateElement.apply(this, arguments);
    console.warn = console_warn;
    return element;
};

module.exports = WrappedReact;