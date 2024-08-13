"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  setting?: boolean;
}

// const Checkbox = React.forwardRef<
//   React.ElementRef<typeof CheckboxPrimitive.Root>,
//   React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
// >(({ className ,...props }, ref) => (
//   <CheckboxPrimitive.Root
//     ref={ref}
//     className={cn(
//       "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-custom-green-oil data-[state=checked]:text-custom-green-night",
//       className
//     )}
//     {...props}
//   >
//     <CheckboxPrimitive.Indicator
//       className={cn("flex items-center justify-center text-current")}
//     >
//       <Check className="h-4 w-4" />
//     </CheckboxPrimitive.Indicator>
//   </CheckboxPrimitive.Root>
// ));
// Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// export { Checkbox };

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, setting = false, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      setting ? "data-[state=checked]:bg-[#004a39] data-[state=checked]:text-white" : "data-[state=checked]:bg-custom-green-oil data-[state=checked]:text-custom-green-night",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
