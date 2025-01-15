import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

interface EducationTimelineProps {
  school: string;
  degree: string;
  field: string;
  logoUrl: string;
  start: string;
  end: string;
  desc: string;
  href: string;
}

export const EducationTimeline: React.FC<EducationTimelineProps> = ({
  school,
  degree,
  field,
  logoUrl,
  start,
  end,
  desc,
  href,
}) => {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={logoUrl} alt={school} className="object-contain" />
          <AvatarFallback>{school[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <h2 className="font-semibold leading-none">{degree} in {field}</h2>
            <Link href={href} className="text-sm hover:underline">
              {school}
            </Link>
          </div>
          <time className="text-sm text-muted-foreground mt-1 sm:mt-0">
            {start} - {end}
          </time>
        </div>
        {desc && (
          <span className="prose dark:prose-invert text-sm text-muted-foreground mt-1">
            {desc}
          </span>
        )}
      </div>
    </li>
  );
};