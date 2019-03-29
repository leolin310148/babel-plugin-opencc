const opencc = require('node-opencc');
module.exports = () => {
  return {
    visitor: {
      StringLiteral(path, { opts }) {
        const translation = opts.translation || 'traditionalToSimplified';
        const match = path.node.value.match(/[\u4e00-\u9fa5]/g);
        if (match) {
          path.node.value = opencc[translation](path.node.value);
        }
      }
    }
  };
};
