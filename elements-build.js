const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/tester/runtime.js',
        './dist/tester/polyfills.js',
        './dist/tester/scripts.js',
        './dist/tester/main.js',
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/prac.js');
    await fs.copyFile('./dist/tester/styles.css', 'elements/styles.css')
   // await fs.copy('./dist/tester/assets/', 'elements/assets/' )
    
})()