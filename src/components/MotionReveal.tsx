import React from "react";

interface MotionRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export default function MotionReveal({
  children,
  className = "",
  delay,
  duration,
  yOffset,
  ...props
}: MotionRevealProps) {
  void delay;
  void duration;
  void yOffset;
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

