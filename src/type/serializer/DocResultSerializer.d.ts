interface DocResultSerializer{
  content: string,
  result: DocResultItem[]
}

interface DocResultItem{
  level: number,
  comment: string
}