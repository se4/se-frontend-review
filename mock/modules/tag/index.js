const express = require('express');
const router = express.Router();
const UserSerializer = require('../../serializers/UserSerializer');
const TagSerializer = require('../../serializers/TagSerializer');

router.route('').get((req, res) => {
  //获得用户标签列表
  res.send({
    data: [TagSerializer(), TagSerializer(), TagSerializer()]
  });
});

module.exports = router;
