import { cn } from "@/src/lib/utils";
import React from "react";

export function Button({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center px-4 py-2 rounded-md border border-gray-600 hover:bg-gray-800 transition-colors",
        className
      )}
    >
      {children}
    </button>
  );
}
