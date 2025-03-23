import { ComponentPropsWithoutRef } from "react";

interface TagProps extends ComponentPropsWithoutRef<"span"> {
  children: React.ReactNode;
}

export function Tag({ children, ...props }: TagProps) {
  return (
    <span
      className={
        "px-2 py-1 text-sm rounded-md bg-sky-500/10 text-sky-500 border border-sky-500/20"
      }
      {...props}
    >
      {children}
    </span>
  );
}
