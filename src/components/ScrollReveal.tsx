import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "scale-in" | "slide-left" | "slide-right";
  delay?: number;
  duration?: number;
  threshold?: number;
}

const ScrollReveal = ({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 600,
  threshold = 0.1,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold });

  const animations = {
    "fade-up": {
      initial: "translate-y-8 opacity-0",
      visible: "translate-y-0 opacity-100",
    },
    "fade-in": {
      initial: "opacity-0",
      visible: "opacity-100",
    },
    "scale-in": {
      initial: "scale-95 opacity-0",
      visible: "scale-100 opacity-100",
    },
    "slide-left": {
      initial: "-translate-x-8 opacity-0",
      visible: "translate-x-0 opacity-100",
    },
    "slide-right": {
      initial: "translate-x-8 opacity-0",
      visible: "translate-x-0 opacity-100",
    },
  };

  const { initial, visible } = animations[animation];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isVisible ? visible : initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
