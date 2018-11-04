interface DocSimpleSerializer {
  id: number;
  filename: string;
  owner: TagSerializer;
}

interface DocSerializer extends DocSimpleSerializer {
  content: string;
}
