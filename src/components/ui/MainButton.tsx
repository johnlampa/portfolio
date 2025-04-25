import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

// Define button styles using cva
const buttonStyles = cva(
  "px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer", // Base styles
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-purple)] text-[var(--color-white)] hover:bg-[var(--color-magenta)]",
        secondary:
          "bg-[var(--color-black)] text-[var(--color-white)] hover:text-black border border-[var(--color-white)] hover:bg-[var(--color-white)]",
        gradient:
          "bg-gradient-to-r from-[var(--color-purple)] to-[var(--color-magenta)] text-[var(--color-white)] hover:opacity-80",
      },
      size: {
        small: "text-sm",
        medium: "text-base",
        large: "text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

// Define props for the button
interface MainButtonProps extends VariantProps<typeof buttonStyles> {
  children: React.ReactNode;
  onClick?: () => void;
}

function MainButton({ variant, size, children, onClick }: MainButtonProps) {
  return (
    <button className={clsx(buttonStyles({ variant, size }))} onClick={onClick}>
      {children}
    </button>
  );
}

export default MainButton;
