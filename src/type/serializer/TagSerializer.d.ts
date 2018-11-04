interface TagSerializer {
  id: number;
  type: string;
  shareLink: string;
  name: string;
  owners: UserSerializer[];
  createdAt: string;
  updatedAt: string;
}
