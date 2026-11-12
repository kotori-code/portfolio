// オリジナルの小鳥のキャラクター（名前の「kotori」から）。サイトの配色だけで描いている
// 同じ絵を src/app/icon.svg（ブラウザのタブのアイコン）にも使っている。変えるときは両方直す

type Props = {
  className?: string;
};

export function KotoriIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      {/* しっぽ */}
      <path d="M12 38 L2 30 L5 44 Z" fill="#05A847" />
      {/* 足 */}
      <path d="M28 54 v6 M36 54 v6" stroke="#C9A27E" strokeWidth="3" strokeLinecap="round" />
      {/* からだ */}
      <ellipse cx="32" cy="36" rx="22" ry="20" fill="#06C755" />
      {/* おなか */}
      <ellipse cx="37" cy="43" rx="12" ry="10" fill="#FAF7F2" />
      {/* 頭の毛 */}
      <path d="M30 17 Q30 9 36 8 Q33 13 35 17 Z" fill="#06C755" />
      {/* つばさ */}
      <path d="M17 36 Q24 28 31 37 Q25 46 17 36 Z" fill="#05A847" />
      {/* 目 */}
      <circle cx="41" cy="29" r="3.2" fill="#2B2B2B" />
      <circle cx="42.2" cy="27.8" r="1.1" fill="#FFFFFF" />
      {/* ほっぺ */}
      <circle cx="46" cy="36" r="2.8" fill="#C9A27E" opacity="0.55" />
      {/* くちばし */}
      <path d="M52 29 L61 32.5 L52 36 Z" fill="#C9A27E" />
    </svg>
  );
}
