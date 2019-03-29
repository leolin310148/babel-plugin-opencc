const opencc = require('node-opencc');
module.exports = () => {
  return {
    visitor: {
      StringLiteral(path, { opts }) {
        const translation = opts.translation || 'traditionalToSimplified';
        path.node.value = opencc[translation](path.node.value);
      }
    }
  };
};
