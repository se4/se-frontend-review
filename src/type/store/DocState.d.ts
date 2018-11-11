interface DocState {
  docList: DocSimpleSerializer[];
  docDetail: DocSerializer | {};
  checkList: CheckListItemSerializer[];
  myCheckedDocList: DocSimpleSerializer[];
  docResult: DocResultSerializer[]|{};
}
