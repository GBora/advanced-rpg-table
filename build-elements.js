const concat = require('concat');

(async function build() {
  const files = [
    './dist/advanced-rpg-table/runtime-es2015.js',
    './dist/advanced-rpg-table/polyfills-es2015.js',
    './dist/advanced-rpg-table/main-es2015.js',
    // './dist/advanced-rpg-table/runtime-es5.js',
    // './dist/advanced-rpg-table/polyfills-es5.js',
    // './dist/advanced-rpg-table/main-es5.js'
  ];

  await concat(files, './dist/advanced-rpg-table/advanced-rpg-table.js');

})();
