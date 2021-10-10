const activeWindow = require('active-win');

const { getFileName } = require('../getFileName');

activeWindow().then(data => {
	const TM_FILENAME_BASE = getFileName(data)
	console.log(`
import React, { Component } from 'react'

export default class ${TM_FILENAME_BASE} extends Component {

\trender() {
\t\treturn (
\t\t\t<div>
\t\t\t\t
\t\t\t</div>
\t\t)
\t}
}
`)
})


