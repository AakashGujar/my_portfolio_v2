"use client";
import Link from "next/link";
import { ExternalLink, Github, GitFork, Quote, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const ContributionCard = ({
  title,
  description,
  technologies,
  tags, 
  href,
}) => {
  return (
    <Card className="p-4 h-full flex flex-col hover:shadow-lg transition-all duration-300">
      <div className="flex items-center gap-2 mb-2">
        <Github className="size-5" />
        <Link
          href={href}
          className="text-base font-semibold hover:text-blue-500 hover:underline"
        >
          {title}
        </Link>
      </div>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        <div className="flex items-center gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="flex items-center gap-1 text-xs text-muted-foreground"
            >
              <div
                className="size-3 rounded-full"
                style={{ backgroundColor: tech.color }}
              />
              {tech.name}
            </span>
          ))}
        </div>
      </div>
      {/* Tags Section */}
      <div className="flex flex-wrap gap-1 mt-3">
        {tags?.map((tag, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="px-2 py-0.5 text-xs bg-muted/50"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </Card>
  );
};

export const TestimonialCard = ({ testimonial, className }) => {
  return (
    <Card className={`p-6 h-full flex flex-col ${className}`}>
      <div className="flex items-start gap-4 mb-4">
        <Avatar className="size-12 border">
          <AvatarImage src={testimonial.image} alt={testimonial.name} />
          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">{testimonial.name}</h3>
          <p className="text-sm text-muted-foreground">
            {testimonial.designation} at {testimonial.company}
          </p>
        </div>
      </div>
      <div className="relative flex-1">
        <Quote className="absolute -top-2 -left-2 size-6 text-muted-foreground/20" />
        <p className="text-sm text-muted-foreground leading-relaxed pl-4">
          {testimonial.testimonial}
        </p>
      </div>
      <div className="mt-4 pt-4 border-t flex justify-between items-center">
        <p className="text-xs text-muted-foreground">
          Published on {testimonial.platform}{" "}
          {/* Display the platform dynamically */}
        </p>
        <Link
          href="https://www.linkedin.com/in/aakashgujar/"
          className="text-xs text-blue-500 hover:underline flex items-center gap-1"
        >
          View Original
          <ExternalLink className="size-3" />
        </Link>
      </div>
    </Card>
  );
};
