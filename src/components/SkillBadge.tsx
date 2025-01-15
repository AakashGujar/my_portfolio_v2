import React from "react";
import BlurFade from "./magicui/blur-fade";

const SkillBadge = ({ skill, delay }: { skill: string; delay: number }) => (
  <BlurFade delay={delay}>
    <div
      className="flex items-center justify-center p-2 rounded-md bg-gradient-to-br from-primary/20 to-primary/10 hover:from-primary/30 hover:to-primary/20 transition-transform transform hover:scale-105 shadow-lg"
      style={{
        boxShadow:
          "0 6px 10px -1px rgba(0, 0, 0, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      <span className="text-sm font-medium text-center">{skill}</span>
    </div>
  </BlurFade>
);

export default SkillBadge;