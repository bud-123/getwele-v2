import React from "react";
import { cn } from "../../lib/utils";
import "./LogoMarquee.css";

interface LogoMarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  speed?: number;
}

export function LogoMarquee({
  children,
  pauseOnHover = false,
  direction = "left",
  speed = 30,
  className,
  ...props
}: LogoMarqueeProps) {
  return (
    <div 
      className={cn(
        "logo-marquee",
        className
      )} 
      {...props}
    >
      <div className="logo-marquee-container">
        <div 
          className={cn(
            "logo-marquee-content animate-marquee",
            pauseOnHover && "hover:[animation-play-state:paused]",
            direction === "right" && "animate-marquee-reverse"
          )}
          style={{ "--duration": `${speed}s` } as React.CSSProperties}
        >
          {children}
          {children}
        </div>
      </div>
    </div>
  );
}

export default LogoMarquee; 