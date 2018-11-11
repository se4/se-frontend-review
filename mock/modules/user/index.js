const express = require('express');
const router = express.Router();
const UserSerializer = require('../../serializers/UserSerializer');
const TagSerializer = require('../../serializers/TagSerializer');

router.route('/:userId').get((req, res) => {
  //获得用户信息
  res.send({
    data: UserSerializer(),
    abilities: {
      update: true
    }
  });
});

router.route('/:userId').post((req, res) => {
  //修改用户信息
  res.send({
    data: UserSerializer(),
    abilities: {
      update: true
    }
  });
});

module.exports = router;
