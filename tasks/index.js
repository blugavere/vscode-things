
'use strict';

const fs = require('fs');
const path = require('path');
const tasks = require('./tasks');
fs.writeFileSync(path.join(__dirname, './tasks.json'), JSON.stringify(tasks));
