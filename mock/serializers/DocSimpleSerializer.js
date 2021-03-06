const makeId = require('../util/makeId');
const tagSerializer = require('./TagSerializer');

module.exports = (filename = '需求规格说明文档') => {
  return {
    id: makeId(),
    filename,
    owner: tagSerializer()
  };
};
