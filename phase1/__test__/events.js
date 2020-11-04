'use strict';

// Global Event Pool (shared by all modules)


const EE = require('events');

const events = new EE();

module.exports = events;