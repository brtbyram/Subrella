import { apiService } from "./api";

const SUBSCRIPTION_URL = "/subscriptions";

const getAllSubscriptions = async (userId) => {
  const { data } = await apiService.get(`${SUBSCRIPTION_URL}/${userId}`);
  return data;
}

const createSubscription = async (values) => {
  const { data } = await apiService.post(`${SUBSCRIPTION_URL}`, values);
  return data;
};

export { getAllSubscriptions, createSubscription };
