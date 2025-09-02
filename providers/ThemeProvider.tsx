"use client";

import { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-gray-50 text-gray-900">{children}</div>;
}
