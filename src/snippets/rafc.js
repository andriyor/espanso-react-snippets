const activeWindow = require('active-win');

const { getFileName } = require('../getFileName');

activeWindow().then(data => {
  const TM_FILENAME_BASE = getFileName(data)
  // TODO???
  console.log(`import React from 'react' \n export const ${TM_FILENAME_BASE} = () => {\n\treturn (\t\t \n<div>\t\t\t \n\t\t</div> \n\t); } `)
})



// console.log(`
// import React from 'react'
// export const ${TM_FILENAME_BASE} = () => {
// \treturn (
// \t\t<div>
// \t\t\t
// \t\t</div>
// \t);
// }
// `)
