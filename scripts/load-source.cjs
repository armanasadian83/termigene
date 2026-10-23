// Compile the existing React source for build-time rendering without a second app.
const fs = require('node:fs');
const path = require('node:path');
const babel = require('@babel/core');
const source = path.resolve(__dirname, '../src') + path.sep;
const original = require.extensions['.js'];
function compile(module, filename) {
 if (!filename.startsWith(source)) return original(module, filename);
 const result = babel.transformSync(fs.readFileSync(filename, 'utf8'), {
  filename, babelrc: false, configFile: false,
  presets: [[require.resolve('@babel/preset-react'), { runtime: 'automatic' }]],
  plugins: [require.resolve('@babel/plugin-transform-modules-commonjs')],
 });
 module._compile(result.code, filename);
}
require.extensions['.js'] = compile;
require.extensions['.jsx'] = compile;
require.extensions['.css'] = module => { module.exports = {}; };
