'use strict';

exports = module.exports = function () {
    return !!(typeof process !== 'undefined' && process.versions && process.versions.node);
};
