import React, { HTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button } from "@/features/ui/button/button";


const buttonGroupVariants = cva("btn-grup inline-flex rounded-md shadow-sm", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: { variant: "default" },
});

interface ButtonProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {}

const ButtonGroup = ({ className, variant, children, ...prop }: ButtonProps) => {
  const filteredChildren = React.Children.toArray(children).filter((child) => {
    return React.isValidElement(child) && (
      child.type === 'button' || child.type === Button
    );
  });

  return (
    <div
      role="group"
      className={cn(buttonGroupVariants({ variant, className }))}
      {...prop}
    >
      {filteredChildren}
    </div>
  );
};

export {ButtonGroup, buttonGroupVariants};
