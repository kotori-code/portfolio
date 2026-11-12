import Image from "next/image";
import type { Work } from "@/data/works";

/**
 * 作品の表紙。1 枚目のスクリーンショットがあればそれを、なければ絵文字と色の代わりの絵を出す。
 */
export function WorkCover({ work, priority = false }: { work: Work; priority?: boolean }) {
  const first = work.screenshots[0];
  // 横長の画像（リッチメニューなど）は切り取らずに全体を見せる
  const isWide = first !== undefined && first.width > first.height * 1.5;

  return (
    <div
      className="relative aspect-[4/3] overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${work.cover.from}, ${work.cover.to})` }}
    >
      {first ? (
        <Image
          src={first.src}
          alt={first.alt}
          fill
          priority={priority}
          sizes="(min-width: 768px) 33vw, 100vw"
          className={isWide ? "object-contain p-4" : "object-cover object-top"}
        />
      ) : (
        <span aria-hidden className="absolute inset-0 flex items-center justify-center text-7xl drop-shadow">
          {work.cover.emoji}
        </span>
      )}
    </div>
  );
}
