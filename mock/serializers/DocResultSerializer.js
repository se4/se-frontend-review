const makeId = require('../util/makeId');
const userSerializer = require('./UserSerializer');

module.exports = (type = 'GROUP', name = 'TagBaker') => {
  return {
    fid: makeId(),
    content: '该项评价的内容, String',
    result: [
      {
        rid: 1,
        level: 0,
        comment: '我觉得还行'
      },
      {
        rid: 2,
        level: 1,
        comment: '我觉得不行'
      }
    ]
  };
};
