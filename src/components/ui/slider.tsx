import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  variant?: "default" | "accent";
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, variant = "default", ...props }, ref) => {
  const isAccent = variant === "accent";
  
  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn("relative flex w-full touch-none select-none items-center", className)}
      {...props}
    >
      <SliderPrimitive.Track 
        className="relative h-3 w-full grow overflow-hidden rounded-full"
        style={{ backgroundColor: 'hsl(220, 15%, 88%)' }}
      >
        <SliderPrimitive.Range 
          className="absolute h-full"
          style={{ backgroundColor: 'hsl(195, 65%, 28%)' }}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb 
        className="block h-6 w-6 rounded-full border-2 bg-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-grab active:cursor-grabbing"
        style={{ 
          borderColor: 'hsl(195, 65%, 28%)',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
        }}
      />
    </SliderPrimitive.Root>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
