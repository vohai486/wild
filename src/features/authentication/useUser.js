import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  // const { isLoading, data: user } = useQuery({
  //   queryKey: ["user"],
  //   queryFn: getCurrentUser,
  // });
  const user = {
    user_metadata: "Hải",
  };
  return {
    isLoading: false,
    user,
    isAuthenticated: user?.role === "authenticated",
  };
}
