const express = require('express');
const router = express.Router();
const DocSerializer = require('../../serializers/DocSerializer');
const CheckListItemSerializer = require('../../serializers/CheckListItemSerializer');

router.route('').get((req, res) => {
  //获得用户信息
  res.send({
    data: [
      DocSerializer(),
      DocSerializer(),
      DocSerializer(),
      DocSerializer(),
      DocSerializer()
    ]
  });
});

router.route('/:docId').get((req, res) => {
  //修改用户信息
  res.send({
    data: DocSerializer()
  });
});

router
  .route('/:docId/checklist')
  .get((req, res) => {
    res.send({
      data: [
        CheckListItemSerializer(),
        CheckListItemSerializer(),
        CheckListItemSerializer(),
        CheckListItemSerializer()
      ]
    });
  })
  .post((req, res) => {
    res.send({
      data: [
        CheckListItemSerializer(),
        CheckListItemSerializer(),
        CheckListItemSerializer(),
        CheckListItemSerializer()
      ]
    });
  });

module.exports = router;
