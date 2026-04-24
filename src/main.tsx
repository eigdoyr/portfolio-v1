import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ErrorBoundary from "@components/ErrorBoundary/ErrorBoundary";
import { HelmetProvider } from "react-helmet-async";
import "../index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ErrorBoundary>
  </StrictMode>,
);
