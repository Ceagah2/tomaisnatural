import React from "react";
import "../styles/tailwind.css";
import type { PageContext } from "./types";
import { PageContextProvider } from "./usePageContext";

export function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
          <main className="flex-1 p-6 ">
            {children}
          </main>
      </PageContextProvider>
    </React.StrictMode>
  );
}