import React, { HTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import "@/styles/card.css";

const cardVariants = cva("gsRKKn fCwAVO", {
  variants: {
    variant: {
      default: "",
    },
    size: {
      default: "",
    },
  },
  defaultVariants: { variant: "default", size: "default" },
});

interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = ({ className, children, variant, size, ...prop }: CardProps) => {
  return (
    <div className={cn(cardVariants({ variant, size, className }))} {...prop}>
      <div className="card-interior">
        <div>
          <div className="devWtL">{children}</div>
        </div>
      </div>
    </div>
  );
};

const cardHeaderVariants = cva("kkrkKf", {
  variants: {
    variant: {
      default: "",
    },
    size: {
      default: "",
    },
  },
  defaultVariants: { variant: "default", size: "default" },
});

interface CardHeaderProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardHeaderVariants> {
  avatar?: React.ReactNode;
  action?: React.ReactNode;
}

const CardHeader = ({
  className,
  children,
  variant,
  size,
  avatar,
  action,
  ...prop
}: CardHeaderProps) => {
  return (
    <div
      className={cn(cardHeaderVariants({ variant, size, className }))}
      {...prop}
    >
      <div className="iflOqw">
        <div className="avatar-card">{avatar}</div>
        <span className="fdsGyQ">{children}</span>
      </div>
      <div className="action-card ldTqEj gFRMcY">{action}</div>
    </div>
  );
};

const CardContentVariants = cva("kfKYrU", {
  variants: {
    variant: {
      default: "",
    },
    size: {
      default: "",
    },
  },
  defaultVariants: { variant: "default", size: "default" },
});

interface CardContentProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof CardContentVariants> {}

const CardContent = ({
  className,
  children,
  variant,
  size,
  ...prop
}: CardContentProps) => {
  return (
    <span
      className={cn(CardContentVariants({ variant, size, className }))}
      {...prop}
    >
      {children}
    </span>
  );
};


const CardActionsVariants = cva("", {
  variants: {
    variant: {
      default: "",
    },
    size: {
      default: "",
    },
  },
  defaultVariants: { variant: "default", size: "default" },
});

interface CardActionsProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof CardActionsVariants> {}

const CardActions = ({
  className,
  children,
  variant,
  size,
  ...prop
}: CardActionsProps) => {
  return (
    <div
      className={cn(CardActionsVariants({ variant, size, className }))}
      {...prop}
    >
      {children}
    </div>
  );
};

export {
  Card,
  CardHeader,
  CardContent,
  cardVariants,
  CardActions,
  cardHeaderVariants,
  CardContentVariants,
  CardActionsVariants,
};
