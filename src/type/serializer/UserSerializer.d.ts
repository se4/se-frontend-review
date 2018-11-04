interface UserSerializer {
  id: number;
  role: string;
  username: string;
  nickname?: string;
  bio?: string;
  avatar?: string;
  createdAt?: string;
  updatedAt?: string;
}
