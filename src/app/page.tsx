import { HeroVisual } from "@/components/HeroVisual";
import { WorkCard } from "@/components/WorkCard";
import { contacts, profile, services, strengths } from "@/data/profile";
import { works } from "@/data/works";

// URL が入っている連絡先だけを表示する
const availableContacts = contacts.filter((contact) => contact.href !== "");
const directContacts = availableContacts.filter((contact) => contact.primary);
const platformContacts = availableContacts.filter((contact) => !contact.primary);

// 区切りごとに折り返す（日本語が文の途中で改行されるのを防ぐ）
function Phrases({ phrases }: { phrases: string[] }) {
  return phrases.map((phrase) => (
    <span key={phrase} className="inline-block">
      {phrase}
    </span>
  ));
}

export default function Home() {
  return (
    <main>
      {/* はじめに */}
      <section className="mx-auto grid max-w-5xl items-center gap-12 px-5 pb-16 pt-16 sm:pt-24 md:grid-cols-[1.1fr_1fr]">
        <div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            <Phrases phrases={profile.lead} />
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted">
            <Phrases phrases={profile.description} />
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#works"
              className="rounded-full bg-primary px-6 py-3 font-medium text-white transition hover:bg-primary-dark"
            >
              作品を見る
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line bg-surface px-6 py-3 font-medium transition hover:border-accent"
            >
              連絡先
            </a>
          </div>
        </div>
        <HeroVisual />
      </section>

      {/* 強み */}
      <section className="mx-auto max-w-5xl px-5 pb-20">
        <div className="grid gap-4 sm:grid-cols-2">
          {strengths.map((item) => (
            <div key={item.title} className="rounded-2xl border border-line bg-surface p-6">
              <p className="text-2xl" aria-hidden>
                {item.emoji}
              </p>
              <h2 className="mt-2 font-bold">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* できること */}
      <section id="services" className="mx-auto max-w-5xl scroll-mt-16 px-5 py-20">
        <h2 className="text-2xl font-bold sm:text-3xl">できること</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {services.map((group) => (
            <div key={group.title} className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="font-bold">
                <span aria-hidden>{group.emoji}</span> {group.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed">
                    <span className="text-primary" aria-hidden>
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 作品 */}
      <section id="works" className="scroll-mt-16 border-y border-line bg-surface/60 py-20">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-2xl font-bold sm:text-3xl">作品</h2>
          <p className="mt-2 text-muted">画面の写真はサンプルのデータです。</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {works.map((work, i) => (
              <WorkCard key={work.slug} work={work} priority={i < 3} />
            ))}
          </div>
        </div>
      </section>

      {/* 連絡先 */}
      <section id="contact" className="scroll-mt-16 bg-ink py-20 text-white">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">ご相談・お問い合わせ</h2>
          <p className="mt-4 text-white/70">「こんなことはできる？」という段階でも、お気軽にどうぞ。</p>

          {directContacts.length > 0 && (
            <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
              {directContacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-white p-6 text-left text-ink transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <p className="text-2xl" aria-hidden>
                    {contact.emoji}
                  </p>
                  <p className="mt-2 text-lg font-bold">{contact.label} →</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{contact.description}</p>
                </a>
              ))}
            </div>
          )}

          {platformContacts.length > 0 && (
            <>
              <p className="mt-10 text-sm text-white/70">お仕事サービスからのご依頼も受け付けています</p>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {platformContacts.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-medium transition hover:bg-white/10"
                  >
                    {contact.label}
                  </a>
                ))}
              </div>
            </>
          )}

          {directContacts.length === 0 && platformContacts.length === 0 && (
            <p className="mt-8 text-white/70">連絡先は準備中です。</p>
          )}
        </div>
      </section>
    </main>
  );
}
