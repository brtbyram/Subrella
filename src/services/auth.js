import { apiService } from "./api";
import { useMutation, useQuery } from "@tanstack/react-query";

const useLogin = () => {
  return useMutation({
    mutationFn: async (values) => {
      const { data } = await apiService.post("/auth/login", values);
      return data;
    },
  });
};

const useRegister = async (values) => {
  const { data } = await apiService.post("/auth/register", values);
  return data;
};

const useLogout = async () => {
  await apiService.post("/auth/logout");
};

export { useLogin, useRegister, useLogout };
