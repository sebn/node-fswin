'use strict';
if (process.platform === 'win32') {
  module.exports = require('bindings')('fswin.node');
} else {
	throw 'this module only works on windows';
}
