import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children = "Click Me", onClick, className = "" }: ButtonProps) {
  return (
    <button 
      className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}