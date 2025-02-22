import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { GoogleOAuthProvider } from "@react-oauth/google";


const queryClient = new QueryClient({
  fetchOptions: {
    credentials: "include", // Oturum bilgilerini gönder (cookie) 
  },
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 dakika boyunca veri bayatlamaz
      cacheTime: 10 * 60 * 1000, // 10 dakika boyunca önbellekte kalır
      refetchOnWindowFocus: false, // Pencere odağa geldiğinde yeniden fetch etmez
      refetchIntervalInBackground : true, // Arka planda yeniden fetch etmez
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId="188022179155-59drsciabjs2m0oj8dg0pgu5lp4e18ln.apps.googleusercontent.com">
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  </GoogleOAuthProvider>
);
