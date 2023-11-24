import React from "react";
import {cva, type VariantProps} from "class-variance-authority";

const button = cva("rounded-lg font-inter", {
  variants: {
    variant: {
      filled: [
        "bg-primary-500 text-white",
        "hover:bg-primary-600 hover:text-white",
        "disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed",
      ],
      outlined: [
        "bg-transparent text-primary-500 border border-primary-500",
        "hover:bg-primary-300",
        "disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-300 disabled:cursor-not-allowed",
      ],
      ghost: [
        "bg-primary-400 text-primary-600",
        "hover:bg-primary-300",
        "disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed",
      ],
      text: [
        "bg-transparent text-primary-500",
        "hover:bg-primary-300",
        "disabled:text-gray-500",

      ],
    },
    size: {
      small: ["text-xs", "py-1", "px-2"],
      medium: ["text-sm", "py-2", "px-4","w-24"],
      large: ["text-base", "py-3", "px-6","w-96"],
    },
  },
  defaultVariants: {
    variant: "filled",
    size: "medium",
  },
});

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof button> {
}

export const Button: React.FC<ButtonProps> = ({
            className,
            variant,
            size,
            ...props
          }) => <button className={button({variant, size, className})} {...props} />;
