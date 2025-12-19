import React from "react";

interface GlowingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const GlowingCard = ({ children, className, ...props }: GlowingCardProps) => {
  return (
    <div className={`relative group ${className || ""}`} {...props}>
      <div className="relative h-full w-full overflow-hidden rounded-xl p-[2px]">
        <div className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <div className="relative h-full w-full rounded-[11px] bg-slate-900 flex items-center justify-center p-8 text-white text-xl font-bold">
          {children}
        </div>
      </div>
    </div>
  );
};

export default GlowingCard;
