import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";
import q7Thumb from "@/assets/q7-thumb.png";

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
        className="block h-8 w-8 rounded-full border-2 bg-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-grab active:cursor-grabbing flex items-center justify-center overflow-hidden"
        style={{ 
          borderColor: 'hsl(195, 65%, 28%)',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.18)'
        }}
      >
        {/* Q7 Logo */}
        <img 
          src={q7Thumb} 
          alt="Q7" 
          className="w-5 h-5 object-contain pointer-events-none"
        />
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
