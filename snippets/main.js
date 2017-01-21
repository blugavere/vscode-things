
'use strict';

const fs = require('fs');
const path = require('path');
const snippets = require('./snippets');

fs.writeFileSync(path.join(__dirname, './snippets.json'), JSON.stringify(snippets));
