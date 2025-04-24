import { AxiosResponse } from 'axios';

export interface Subscription {
  id: string;
  userId: string;
  name: string;
  price: number;
  status: 'active' | 'inactive' | 'pending' | 'canceled';
  createdAt: string;
  updatedAt: string;
}

export interface CreateSubscriptionPayload {
  userId: string;
  name: string;
  price: number;
  status: 'active' | 'inactive' | 'pending' | 'canceled';
}

export function getAllSubscriptions(userId: string): Promise<AxiosResponse<Subscription[]>>;
export function createSubscription(values: CreateSubscriptionPayload): Promise<AxiosResponse<Subscription>>;

