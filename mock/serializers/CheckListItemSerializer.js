const makeId = require('../util/makeId');
const userSerializer = require('./UserSerializer');

module.exports = (type = 'GROUP', name = 'TagBaker') => {
  return {
    id: makeId(),
    content: '该项评价的内容, String',
    level: '用户的评级,Number (1~5)',
    comment: '用户的备注, String',
    //未来会添加
    explain: '老师的说明,String'
  };
};
