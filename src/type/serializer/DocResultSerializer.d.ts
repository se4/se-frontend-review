interface DocResultSerializer {
  content: string;
  result: DocResultItem[];
  fid: number;
  pass: boolean;
}

interface DocResultItem {
  level: number;
  comment: string;
}
