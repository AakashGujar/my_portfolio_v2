import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface TimelineCardProps {
  company?: string;
  title?: string;
  description?: string;
  location?: string;
  logoUrl?: string;
  start?: string;
  end?: string;
  badges?: string[];
  href?: string;
  links?: {
    href: string;
    title: string;
    icon?: JSX.Element;
  }[];
}

export const TimelineCard: React.FC<TimelineCardProps> = ({
  company,
  title,
  description,
  location,
  logoUrl,
  start,
  end,
  badges = [],
  href,
  links,
}) => {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={logoUrl} alt={company} className="object-contain" />
          <AvatarFallback>{company[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between items-center">
          <div className="flex flex-col">
            <p className="text-xs text-muted-foreground">{location}</p>
            <h2 className="font-semibold leading-none">{title}</h2>
            <Link href={href} className="text-sm hover:underline">
              {company}
            </Link>
          </div>
          <time className="text-sm text-muted-foreground mt-1 sm:mt-0">
            {start} - {end}
          </time>
        </div>
        {description && (
          <span className="prose dark:prose-invert text-sm text-muted-foreground mt-1">
            {description}
          </span>
        )}
      </div>
      {badges && badges.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {badges.map((badge, idx) => (
            <Badge key={idx}>{badge}</Badge>
          ))}
        </div>
      )}
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links.map((link, idx) => (
            <Link href={link.href} key={idx}>
              <Badge key={idx} title={link.title} className="flex gap-2">
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
};
