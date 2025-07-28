import * as React from "react";

interface ProgressBarProps {
  progress: number;
  className?: string;
}

export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ progress, className = "", ...props }, ref) => (
    <div
      ref={ref}
      className={`relative h-4 w-full overflow-hidden rounded-full bg-secondary ${className}`}
      {...props}
    >
      <div
        className="h-full w-full flex-1 bg-primary transition-all"
        style={{ transform: `translateX(-${100 - (progress || 0)}%)` }}
      />
    </div>
  )
);
ProgressBar.displayName = "ProgressBar";