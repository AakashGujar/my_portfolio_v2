import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const PublicationCard = ({
  title,
  dates,
  description,
  publication,
  link,
}: {
  title: string;
  dates: string;
  description: string;
  publication: string;
  link: string;
}) => {
  return (
    <div className="group relative rounded-lg border p-4 hover:bg-muted/50 transition-colors">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h3 className="font-medium leading-none">{title}</h3>
            {link && (
              <Link
                href={link}
                target="_blank"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
              >
                <ArrowUpRight className="size-3" />
              </Link>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              {publication}
            </Badge>
            <span className="text-sm text-muted-foreground">{dates}</span>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};