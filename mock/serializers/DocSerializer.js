const makeId = require("../util/makeId");
const tagSerializer = require("./TagSerializer");

module.exports = (filename = "需求规格说明文档") => {
  return {
    id: makeId(),
    filename,
    owners: tagSerializer(),
    content:
      "# 需求规格说明文档\n\n" +
      "> 参照语雀API基本要求\n" +
      "\n" +
      "## 基本路径\n" +
      "* `/api/v2/`\n" +
      "\n" +
      "## HTTP Verbs\n" +
      "\n" +
      "| Verb | Description |\n" +
      "| :--- | :--- |\n" +
      "| GET | 用于获取数据 |\n" +
      "| POST | 用于创建数据 |\n" +
      "| PUT | 用于修改部分数据，例如一个文档标题，正文 |\n" +
      "| DELETE | 用于删除数据 |\n" +
      "\n" +
      "## 用户认证\n" +
      "使用 Token 机制来实现用户认证。\n" +
      "在请求的 HTTP Headers 传入 `Authorization` 带入用户的 Token 信息，用于认证。\n" +
      "\n" +
      "文档会在需要用户权限的api中标识 __[需要认证] __\n" +
      "\n" +
      "## HTTP 状态码\n" +
      "* 200 - 成功\n" +
      "* 400 - 请求的参数不正确，或缺少必要信息，请对比文档\n" +
      "* 401 - 需要用户认证的接口用户信息不正确，即__Token错__\n" +
      "* 403 - 缺少对应功能的权限，即__权限不足__\n" +
      "* 404 - 数据不存在，或未开放\n" +
      "* 500 - 服务器异常\n" +
      "\n" +
      "## 返回数据格式[示例]\n" +
      "* JSON 格式\n" +
      "\n" +
      "```json\n" +
      "{\n" +
      '    "data": {\n' +
      '        "id": 10,\n' +
      '        "slug": "weekly",\n' +
      '        "name": "技术周刊",\n' +
      "     },\n" +
      '    "abilities": {\n' +
      '        "update": false,\n' +
      '        "destroy": false\n' +
      "    },\n" +
      '    "meta": {\n' +
      '        "liked": false,\n' +
      '        "followed": false,\n' +
      "    }\n" +
      "}\n" +
      "```\n" +
      "\n" +
      "* id: 每个数据都会有的，Resource 的唯一编号，后续很多地方你可能需要用它查询\n" +
      "* abilities: 表述当前登陆者对于此资源的权限\n" +
      "* meta: 一些附加信息，例如是否赞过，是否关注过\n" +
      "\n" +
      "## DateTime 格式\n" +
      "DateTime 使用 [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) 标准格式，请按照标准方式进行转换。\n"
  };
};
