// サイト全体で使うプロフィール。名前や連絡先を変えるときはここだけ直す。

export const profile = {
  name: "kotori-code",
  title: "LINE 連携の Web アプリ制作",
  lead: "小さなお店や家族の「ちょっと困った」を、LINE と Web アプリで解決します。",
  description:
    "LINE の自動返信・通知・定期配信と、スマホで使いやすい Web アプリを、提案から運用マニュアルまで一貫して制作しています。",
  githubUrl: "https://github.com/kotori-code",
};

export type Contact = {
  label: string;
  description: string;
  emoji: string;
  /** 空のあいだはボタンを表示しない。URL を入れると表示される */
  href: string;
  /** 目立たせる（直接の相談窓口） */
  primary?: boolean;
};

// お問い合わせ先。href に URL を入れたものだけがサイトに表示される。
export const contacts: Contact[] = [
  {
    label: "お問い合わせフォーム",
    description: "内容がまとまっていなくても大丈夫です。",
    emoji: "✉️",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSca-yni8eHNVeBCeuFlTxHOAZOztxzHarlqHU_nsmfOiMJJYA/viewform?usp=dialog",
    primary: true,
  },
  {
    label: "LINE で相談",
    description: "友だち追加して、気軽にメッセージを送ってください。",
    emoji: "💬",
    href: "https://lin.ee/to10adb",
    primary: true,
  },
  {
    label: "クラウドワークス",
    description: "クラウドワークス経由でのご依頼",
    emoji: "🛒",
    href: "https://crowdworks.jp/public/employees/6427548",
  },
  {
    label: "ランサーズ",
    description: "ランサーズ経由でのご依頼",
    emoji: "🛒",
    href: "https://www.lancers.jp/profile/hasshi-taka23",
  },
];

export const strengths = [
  {
    emoji: "💬",
    title: "LINE 連携が得意",
    body: "自動返信・ボタンメニュー・通知・グループへの定期配信まで。お客さまや家族がいつも使っている LINE から使える仕組みを作ります。",
  },
  {
    emoji: "💴",
    title: "続けやすい費用",
    body: "無料プランや月額 0 円の構成を中心に、小さなお店でも負担なく続けられる形を提案します。",
  },
  {
    emoji: "📄",
    title: "提案から運用まで",
    body: "提案書・見積もり・要件定義から、専門用語を使わない運用マニュアルまで。納品後に困らない形でお渡しします。",
  },
  {
    emoji: "⚡",
    title: "AI を活用して速く",
    body: "Claude Code などの AI を活用し、見積もりより短い期間で形にします。設計・テスト・説明資料は自分で確認しています。",
  },
];

export const services = [
  "LINE 公式アカウントの自動返信・リッチメニュー",
  "LINE への通知・定期配信",
  "予約・共有・管理などの小さな Web アプリ",
  "Google スプレッドシートを使った、更新しやすい仕組み",
  "提案書・見積もり・運用マニュアルの作成",
];
