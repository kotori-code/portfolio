import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WorkCover } from "@/components/WorkCover";
import { getWork, works } from "@/data/works";

// 作品ページはビルド時にすべて作る。一覧にない URL はページ内の notFound() で 404 にする
// （cacheComponents が有効なので dynamicParams は使えない）。
export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata(props: PageProps<"/works/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const work = getWork(slug);
  if (!work) return {};
  return { title: work.title, description: work.catchphrase };
}

export default async function WorkPage(props: PageProps<"/works/[slug]">) {
  const { slug } = await props.params;
  const work = getWork(slug);
  if (!work) notFound();

  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <Link href="/#works" className="text-sm text-muted hover:text-ink">
        ← 作品一覧へ
      </Link>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {work.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-surface px-2.5 py-0.5 text-xs font-medium text-muted">
            {tag}
          </span>
        ))}
      </div>
      <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">{work.title}</h1>
      <p className="mt-3 text-lg text-muted">{work.catchphrase}</p>

      {work.notice && (
        <p className="mt-6 rounded-xl border-l-4 border-accent bg-surface p-4 text-sm leading-relaxed">
          {work.notice}
        </p>
      )}

      {work.screenshots.length === 0 && (
        <div className="mt-8 overflow-hidden rounded-2xl">
          <WorkCover work={work} priority />
        </div>
      )}

      <p className="mt-8 leading-relaxed">{work.summary}</p>

      {work.facts && (
        <dl className="mt-8 grid gap-3 sm:grid-cols-3">
          {work.facts.map((fact) => (
            <div key={fact.label} className="rounded-xl border border-line bg-surface p-4">
              <dt className="text-xs text-muted">{fact.label}</dt>
              <dd className="mt-1 font-bold">{fact.value}</dd>
            </div>
          ))}
        </dl>
      )}

      <Section title="解決したい困りごと">
        <p className="leading-relaxed">{work.problem}</p>
      </Section>

      <Section title="できること">
        <ul className="space-y-2">
          {work.features.map((feature) => (
            <li key={feature} className="flex gap-2 leading-relaxed">
              <span className="text-primary" aria-hidden>
                ●
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </Section>

      {work.screenshots.length > 0 && (
        <Section title="画面">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {work.screenshots.map((shot) => (
              <figure
                key={shot.src}
                className={shot.width > shot.height * 1.5 ? "col-span-2" : undefined}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  sizes="(min-width: 768px) 360px, 50vw"
                  className="h-auto w-full rounded-xl border border-line bg-surface"
                />
                {shot.caption && (
                  <figcaption className="mt-2 text-center text-xs text-muted">{shot.caption}</figcaption>
                )}
              </figure>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted">※ 画面の写真はサンプルのデータです。</p>
        </Section>
      )}

      <Section title="工夫したところ">
        <div className="grid gap-4">
          {work.highlights.map((item) => (
            <div key={item.title} className="rounded-xl border border-line bg-surface p-5">
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="使った技術">
        <ul className="flex flex-wrap gap-2">
          {work.tech.map((tech) => (
            <li key={tech} className="rounded-lg border border-line bg-surface px-3 py-1 text-sm">
              {tech}
            </li>
          ))}
        </ul>
      </Section>

      {work.role && (
        <Section title="担当範囲">
          <p>{work.role}</p>
        </Section>
      )}

      {work.repoUrl && (
        <div className="mt-12">
          <a
            href={work.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-ink px-6 py-3 font-medium text-white transition hover:bg-ink/85"
          >
            GitHub でコードを見る
          </a>
        </div>
      )}
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="mb-4 border-b-2 border-accent pb-2 text-xl font-bold">{title}</h2>
      {children}
    </section>
  );
}
