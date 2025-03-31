
import React from "react";
import { cn } from "@/lib/utils";

interface DivisionCardProps {
  title: string;
  industry: string;
  description: string;
  purpose: string;
  iconName: React.ReactNode;
  delay: string;
  index: number;
}

const DivisionCard: React.FC<DivisionCardProps> = ({
  title,
  industry,
  description,
  purpose,
  iconName,
  delay,
  index
}) => {
  return (
    <div className={cn(
      "bg-exelion-secondary p-6 rounded-lg shadow-lg border-t-4 border-exelion-accent transition-all duration-300 hover:transform hover:translate-y-[-5px] animate-fade-in-up",
      delay
    )}>
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-exelion-accent/10 text-exelion-accent p-3 rounded-full">
          {iconName}
        </div>
        <div>
          <h3 className="text-xl font-bold text-exelion-foreground">{title}</h3>
          <p className="text-exelion-muted text-sm">{industry}</p>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="text-md font-semibold text-exelion-accent mb-2">Focus</h4>
        <p className="text-exelion-muted mb-4">{description}</p>
        
        <h4 className="text-md font-semibold text-exelion-accent mb-2">Purpose</h4>
        <p className="text-exelion-muted">{purpose}</p>
      </div>
    </div>
  );
};

export default DivisionCard;
