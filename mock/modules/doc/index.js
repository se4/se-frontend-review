const express = require('express');
const router = express.Router();
const DocSimpleSerializer = require('../../serializers/DocSimpleSerializer');
const DocSerializer = require('../../serializers/DocSerializer');
const CheckListItemSerializer = require('../../serializers/CheckListItemSerializer');

router.route('').get((req, res) => {
  //获得文档列表
  res.send({
    data: [
      DocSimpleSerializer(),
      DocSimpleSerializer(),
      DocSimpleSerializer(),
      DocSimpleSerializer(),
      DocSimpleSerializer()
    ]
  });
});

router.route('/:docId').get((req, res) => {
  //获得文档详情
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

router.route('/:docId/result').get((req, res) => {
  res.send({
    data: {} //Result
  });
});

module.exports = router;
