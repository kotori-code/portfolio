import Link from "next/link";
import type { Work } from "@/data/works";
import { WorkCover } from "./WorkCover";

export function WorkCard({ work, priority = false }: { work: Work; priority?: boolean }) {
  return (
    <Link
      href={`/works/${work.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <WorkCover work={work} priority={priority} />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap gap-1.5">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                tag === "LINE" ? "bg-primary/10 text-primary-dark" : "bg-background text-muted"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold leading-snug group-hover:text-primary-dark">{work.title}</h3>
        <p className="text-sm leading-relaxed text-muted">{work.catchphrase}</p>
        {work.notice && <p className="text-xs text-accent">※ 想定案件</p>}
        <p className="mt-auto pt-2 text-sm font-medium text-primary-dark">詳しく見る →</p>
      </div>
    </Link>
  );
}
