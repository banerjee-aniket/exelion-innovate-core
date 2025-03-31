
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
      "bg-exelion-secondary p-6 rounded-lg shadow-lg border-t-4 border-exelion-accent transition-all duration-500 hover:transform hover:translate-y-[-10px] hover:shadow-2xl animate-fade-in-up group",
      delay
    )}>
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-exelion-accent/10 text-exelion-accent p-3 rounded-full transform transition-transform group-hover:scale-110 group-hover:rotate-6">
          {iconName}
        </div>
        <div>
          <h3 className="text-xl font-bold text-exelion-foreground">{title}</h3>
          <p className="text-exelion-muted text-sm">{industry}</p>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="text-md font-semibold text-exelion-accent mb-2 group-hover:translate-x-1 transition-transform">Focus</h4>
        <p className="text-exelion-muted mb-4">{description}</p>
        
        <h4 className="text-md font-semibold text-exelion-accent mb-2 group-hover:translate-x-1 transition-transform">Purpose</h4>
        <p className="text-exelion-muted">{purpose}</p>
      </div>
    </div>
  );
};

export default DivisionCard;
