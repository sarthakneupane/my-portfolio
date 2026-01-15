import React from "react";

export function Button({ children, variant = "solid", className = "", ...props }) {
  let base = "px-6 py-2 rounded-lg font-medium transition-colors";
  let style = variant === "outline" 
    ? "border border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
    : "bg-orange-500 text-white hover:bg-orange-600";

  return (
    <button className={`${base} ${style} ${className}`} {...props}>
      {children}
    </button>
  );
}
