/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import "@/styles/button.css";

const buttonVariants = cva(
  "ripple select-none inline-flex items-center justify-center whitespace-nowrap font-medium leading-normal transition-btn text-lavenderColor transition-duration-disabled",
  {
    variants: {
      variant: {
        default:
          "border-solid-btn bg-midnightIndigo box-shadow-btn default-color",
        text: "!pl-0 box-shadow-disabled-btn border-disabled-btn bg-transparent text-color",
        outlined: "border-line-btn box-shadow-btn bg-transparent outlined-color",
        dashed: "border-dashed fEcerw gUhCdT"
      },
      size: {
        default: "h-6 px-2 rounded text-[0.75rem]",
        sm: "h-8 px-3.5 rounded text-[0.8125rem]",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

type ColorOptions = "default" | "violet" | "red" | undefined;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  color?: ColorOptions;
}

const Button = ({ className, size, variant, startIcon, endIcon, disabled, color, children, ...prop }: ButtonProps): JSX.Element => {
  const buttonColor = ( variant: string | null | undefined, color: string | null | undefined ): string => {
    switch (variant) {
      case "default":
        if (color === "violet") {
          return "btn-color-violet";
        } else if (color === "red") {
          return "btn-color-red";
        }
        return "";
      case "outlined":
        if (color === "violet") {
          return "btn-outlined-color-violet";
        } else if (color === "red") {
          return "btn-outlined-color-red";
        }
        return "";
      default:
        return "";
    }
  };

  return (
    
    <button
      className={cn(
        buttonVariants({ variant, size, className }),
        cn(buttonColor(variant, color)),
        {
          "btn-disabled-color": disabled && variant === "default",
          "btn-disabled-text": disabled && variant === "text",
          "btn-disabled-outlined": disabled && variant === "outlined",
        }
      )}
      disabled={disabled}
      data-te-ripple-init
      data-te-ripple-color="light"
      {...prop}
    >
      {startIcon && <span className="mr-2 w-4 h-4 icon-btn">{startIcon}</span>}
      <span>{children}</span>
      {endIcon && <span className="ml-2 w-4 h-4 icon-btn">{endIcon}</span>}
    </button>
  );
};

export { Button, buttonVariants };
