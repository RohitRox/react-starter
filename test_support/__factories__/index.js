// This is factories index file
// any modules create in this directory level will be automatically available using Factory.build('file_name') *caseinsensitive

const factories = {};

require('fs').readdirSync(`${__dirname}/`).forEach((file) => {
  if (file.match(/\.js$/) !== null && file !== 'index.js') {
    const name = file.replace('.js', '');
    factories[name] = require(`./${file}`);
  }
});

module.exports = {
  build(item, args) {
    const factory = item.toLowerCase();
    const factoryFunc = factories[factory];
    const output = factoryFunc ? factoryFunc() : null;

    switch (typeof output) {
      case 'object':
        return Array.isArray(output) ? output : Object.assign({}, output, args);
      default:
        console.error('\x1b[31m', `Factory not found for '${item}'`);
        return null;
    }
  },
};
