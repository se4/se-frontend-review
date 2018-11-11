interface DocResultSerializer {
  content: string;
  result: DocResultItem[];
  fid: number;
}

interface DocResultItem {
  level: number;
  comment: string;
}
