
'use strict';

const fs = require('fs');
const path = require('path');
const snippets = require('./Snippets');

fs.writeFileSync(path.join(__dirname, './snippets.json'), JSON.stringify(snippets));
