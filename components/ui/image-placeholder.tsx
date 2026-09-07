"use client";

import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  className?: string;
  aspectRatio?: "square" | "4/3" | "3/2" | "16/9";
  icon?: React.ReactNode;
  text?: string;
}

export function ImagePlaceholder({
  className,
  aspectRatio = "4/3",
  icon,
  text,
}: ImagePlaceholderProps) {
  const aspectClasses = {
    square: "aspect-square",
    "4/3": "aspect-[4/3]",
    "3/2": "aspect-[3/2]",
    "16/9": "aspect-video",
  };

  return (
    <div
      className={cn(
        "relative flex items-center justify-center bg-muted overflow-hidden",
        aspectClasses[aspectRatio],
        className
      )}
    >
      <div className="flex flex-col items-center gap-2 text-muted-foreground">
        {icon || (
          <svg
            className="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        )}
        {text && (
          <span className="text-xs font-medium">{text}</span>
        )}
      </div>
    </div>
  );
}
