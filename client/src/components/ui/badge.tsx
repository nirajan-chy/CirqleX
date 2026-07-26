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
        variant === "accent" && "bg-accent/10 border border-accent/20 text-accent",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
