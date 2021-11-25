export interface CreateUser {
  id: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface PutUser {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface PatchUser extends Partial<CreateUser> {}
