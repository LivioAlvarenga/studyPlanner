import React from "react";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  hover?: string | undefined;
  children?: React.ReactNode;
}

export default function Button({ type, onClick, hover, children }: Props) {
  const hoverColor = hover ?? "hover:bg-neutral-900";
  return (
    <button
      className={` self-center justify-self-center rounded-xl bg-neutral-800 px-6 py-3 text-xl tracking-wider text-white shadow-md duration-500  ease-in-out  hover:px-9  hover:shadow-neutral-800 ${hoverColor}`}
      type={type ?? "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
