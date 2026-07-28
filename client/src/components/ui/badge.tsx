import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "accent";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium transition-colors",
        variant === "default" && "bg-card border border-border text-secondary-text",
        variant === "outline" && "border border-border text-secondary-text",
        variant === "accent" && "bg-white/10 border border-white/20 text-white",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
