/* eslint-disable react-hooks/exhaustive-deps */
import React, { HTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import "@/styles/sidebar.css";

const sidebarVariants = cva("bpiMKI", {
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

interface SidebarProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof sidebarVariants> {}

const Sidebar = ({ className, children, variant, size, ...prop }: SidebarProps) => {
  return (
    <div className={cn(sidebarVariants({ variant, size, className }))} {...prop}>
      <div>
        <div className="bVwNRC dsdsdfs">
          <nav className="cArqZW">
            <div className="bQFmzA gRWfEb">
              <div className="jfLGIA eUzLRu"></div>
              <div></div>
            </div>
            <div></div>
            <div className="gDHACn"></div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
