export type User = {
  id: number;
  email: string;
  password: string;
  salt: string;
  firstName: string;
  lastName: string;
  userRoleId: number;
}

export type Post = {
  id: number;
  name: string;
  description: string;
  userId: number;
}

export type CreateUser = {
  firstName: string;
  lastName: string;
  userRoleId: number;
  email: string;
  password: string;
}

export type CreatePost = {
  name: string;
  description: string;
}
