
const activeWindow = require('active-win');
const { getFileName } = require('../getFileName');


activeWindow().then(data => {
	const TM_FILENAME_BASE = getFileName(data)
console.log(`
import React from 'react';

function ${TM_FILENAME_BASE}(props) {

\treturn (
\t\t<div>
\t\t\t
\t\t</div>
\t);
}

export default ${TM_FILENAME_BASE};
`)
})


