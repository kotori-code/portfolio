import Image from "next/image";
import { KotoriIcon } from "@/components/KotoriIcon";

// トップの最初の画面に置く、作品の画面写真のコラージュ
export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* 奥：行きたい場所リスト */}
      <div className="absolute left-0 top-[8%] w-[62%] -rotate-3 overflow-hidden rounded-2xl border border-line bg-surface shadow-lg">
        <Image
          src="/works/places/list.png"
          alt="作品「行きたい場所リスト」の画面"
          width={840}
          height={863}
          priority
          sizes="(min-width: 768px) 280px, 62vw"
        />
      </div>

      {/* 手前：送迎当番（スマホの枠） */}
      <div className="absolute right-[2%] top-0 z-10 w-[46%] overflow-hidden rounded-[1.6rem] border-[6px] border-ink bg-ink shadow-xl">
        <Image
          src="/works/pickup/home.png"
          alt="作品「送迎当番」のスマホ画面"
          width={780}
          height={1688}
          priority
          className="rounded-[1.1rem]"
          sizes="(min-width: 768px) 210px, 46vw"
        />
      </div>

      {/* 最前面：LINE のボタンメニュー */}
      <div className="absolute bottom-[3%] left-[4%] z-20 w-[62%] rotate-2 rounded-xl border border-line bg-surface p-2 shadow-lg">
        <p className="mb-1 px-1 text-[10px] font-bold text-primary-dark">LINE のボタンメニュー</p>
        <Image
          src="/works/line-bot/richmenu.png"
          alt="作品「美容室の LINE 自動返信 bot」のボタンメニュー"
          width={2500}
          height={843}
          className="rounded-md"
          sizes="(min-width: 768px) 280px, 62vw"
        />
      </div>

      {/* 小鳥：スマホの上にとまっている */}
      <KotoriIcon className="absolute -top-[9%] right-[10%] z-30 w-[16%] drop-shadow" />
    </div>
  );
}
