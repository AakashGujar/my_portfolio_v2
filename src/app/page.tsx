"use client";
import { EducationTimeline } from "@/components/education-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ContributionCard, TestimonialCard } from "@/components/othercard";
import { ProjectCard } from "@/components/project-card";
import { TimelineCard } from "@/components/timeline-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PublicationCard } from "@/components/publication-card";

const BLUR_FADE_DELAY = 0.05;

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsCount = DATA.testimonials.length;
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsCount);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsCount) % testimonialsCount
    );
  };
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full space-y-8">
          <div className="flex items-center justify-between gap-8">
            <div className="flex-col flex flex-1 space-y-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none"
                yOffset={8}
                text={`${DATA.name}`}
              />
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="h-5 flex items-center justify-center gap-1.5 px-2 text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-green-500 ">open to work</p>
                  </Badge>
                </div>
              </BlurFade>

              <BlurFadeText
                className="max-w-[600px] text-sm md:text-lg"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-20 border rounded-3xl">
                <AvatarImage alt={DATA.name} src={DATA.avataUrl} />
                <AvatarFallback className="rounded-3xl">
                  {DATA.initials}
                </AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="space-y-4 prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            <p>
              I’m currently working as a freelance engineer and exploring new
              opportunities for a full-time role. I’m actively diving into Web3
              to expand my skill set. You can find me often active on{" "}
              <Link href="#" className="text-white hover:underline">
                Discord
              </Link>
              . I also manage a thriving community of over 1,000+ members called{" "}
              <Link href="#" className="text-white hover:underline">
                43labs
              </Link>
              . Feel free to check out my
              <Link
                href="https://drive.google.com/file/d/1NSE6XRGxtO-sxMjwDSG_9qTAXqlytI-l/view?usp=sharing"
                target="_blank"
                className="text-white hover:underline"
              >
                Resume
              </Link>
              .
            </p>
          </div>
        </BlurFade>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.work.map((work, id) => (
                <TimelineCard {...work} key={id} />
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.education.map((education, id) => (
                <EducationTimeline {...education} key={id} />
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>

          <div className="flex flex-wrap gap-1">
            {[
              ...DATA.skills.frontend,
              ...DATA.skills.backend,
              ...DATA.skills.DevOps,
              ...DATA.skills.tools,
            ].map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="flex min-h-0 flex-col">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="text-xl font-bold">My Projects</h2>
          </BlurFade>
        </div>
        <div className="space-y-12 w-full py-12">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates || ""}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video || ""}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="open-source">
        <div className="flex min-h-0 flex-col">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Open Source Contributions</h2>
              <Link
                target="_blank"
                href={DATA.contact.social.GitHub.url}
                className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2"
              >
                View GitHub Profile
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.contributions.map((contribution, id) => (
              <BlurFade
                key={contribution.title}
                delay={BLUR_FADE_DELAY * 14 + id * 0.05}
              >
                <ContributionCard {...contribution} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="publications">
        <div className="flex min-h-0 flex-col">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Publications</h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-4 max-w-[800px] mx-auto">
            {DATA.publications.map((publication, id) => (
              <BlurFade
                key={publication.title}
                delay={BLUR_FADE_DELAY * 14 + id * 0.05}
              >
                <PublicationCard {...publication} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="relative">
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Testimonials</h2>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="size-8"
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="size-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="size-8"
                disabled={currentIndex === testimonialsCount - 1}
              >
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>
        </BlurFade>
        <div className="relative overflow-hidden max-w-[800px] mx-auto">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {DATA.testimonials.map((testimonial, idx) => (
              <div key={testimonial.name} className="w-full flex-shrink-0 px-2">
                <BlurFade delay={BLUR_FADE_DELAY * 16}>
                  <TestimonialCard testimonial={testimonial} />
                </BlurFade>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {DATA.testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`size-2 rounded-full transition-colors ${
                  idx === currentIndex ? "bg-primary" : "bg-muted"
                }`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                You can find me on:
              </p>
              <div className="flex gap-4 justify-center">
                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                  <Link href={DATA.contact.social.LinkedIn.url} target="_blank">
                    <svg
                      className="size-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                    </svg>
                  </Link>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 2.2}>
                  <Link href={DATA.contact.social.X.url} target="_blank">
                    <svg
                      className="size-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </Link>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 2.4}>
                  <Link target="_blank" href={`mailto:${DATA.contact.email}`}>
                    <svg
                      className="size-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </Link>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 2.6}>
                  <Link target="_blank" href={DATA.contact.social.GitHub.url}>
                    <svg
                      className="size-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </Link>
                </BlurFade>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
