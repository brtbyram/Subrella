import { useQuery } from "@tanstack/react-query";
import {apiService} from "./api";

const getUser = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const { data } = await apiService.get("/me");
      return data.user;
    },
    retry: false, // Eğer kullanıcı oturum açmamışsa gereksiz tekrar denemeleri önle
  });
};

const updateUser = async (values) => {
  return useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const { data } = await apiService.put("/me", values);
      return data.user;
    },
  });
};

export { getUser };
