import { AxiosResponse } from 'axios';

export interface User {
  id: string;
  email: string;
  name: string;
  // Add other user properties as needed
}

export interface UpdateUserPayload {
  name?: string;
  email?: string;
  // Add other fields that can be updated
}

export function getUser(): Promise<AxiosResponse<User>>;
export function updateUser(values: UpdateUserPayload): Promise<AxiosResponse<User>>;