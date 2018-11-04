const express = require("express");
const router = express.Router();
const DocSerializer = require("../../serializers/DocSerializer");

router.route("").get((req, res) => {
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

router.route("/:docId").get((req, res) => {
  //修改用户信息
  res.send({
    data: DocSerializer()
  });
});

module.exports = router;
