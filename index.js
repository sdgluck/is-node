// Coding standard for this project defined @ https://github.com/MatthewSH/standards/blob/master/JavaScript.md
'use strict';

exports = module.export = function isNode () {
  return !!(typeof process !== 'undefined' && process.versions && process.versions.node);
};
