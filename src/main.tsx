import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import router from "./routes/routes";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";
import DynamicRouter from "./components/layout/RouterProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DynamicRouter />
      </PersistGate>
      <Toaster />
    </Provider>
  </StrictMode>
);
