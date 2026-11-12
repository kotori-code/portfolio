// ポートフォリオに載せる作品のデータ。
// 内容は各リポジトリの README と、制作時の資料（portfolio/*.md）から書き起こしている。
// 画像は public/works/<slug>/ に置く。画像がない作品は cover（絵文字と色）で代わりの絵を出す。

export type Screenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type Work = {
  slug: string;
  title: string;
  /** 一覧のカードに出す 1 行の説明 */
  catchphrase: string;
  /** 詳細ページ冒頭の説明 */
  summary: string;
  /** 想定案件など、読み手に最初に伝えるべき注記 */
  notice?: string;
  problem: string;
  features: string[];
  highlights: { title: string; body: string }[];
  tech: string[];
  role?: string;
  facts?: { label: string; value: string }[];
  repoUrl?: string;
  siteUrl?: string;
  siteNote?: string;
  tags: string[];
  cover: { emoji: string; from: string; to: string };
  screenshots: Screenshot[];
};

export const works: Work[] = [
  {
    slug: "line-bot-salon",
    title: "美容室の LINE 自動返信 bot",
    catchphrase: "よくある質問に LINE で自動返信。答えられない質問はオーナーに通知。",
    summary:
      "美容室のオーナーが施術の合間に対応していた LINE の問い合わせのうち、よくある 5 つの質問に自動で答える bot です。月額 0 円で動き、料金や営業時間はオーナーがスマホで表を直すだけで変えられます。",
    notice:
      "想定案件として、提案書・見積もりから開発・運用マニュアルまでを一通り制作しました。実在のお店・お客様はいません。",
    problem:
      "施術の合間に、1 日 10〜15 件（想定）の問い合わせに手作業で返信している。営業時間外も返事を期待され、同じ質問（営業時間・料金・予約・駐車場など）がくり返し届く。",
    features: [
      "よくある 5 つの質問に自動で返信（メッセージに含まれる言葉で判定）",
      "トーク画面下の 4 つのボタン（営業時間／メニュー・料金／予約方法／アクセス・駐車場）",
      "答えられない質問はオーナーの LINE に通知し、お客さまには「スタッフからご返信します」と返す",
      "返信の文はスプレッドシートで管理。オーナーがスマホで直すと、すぐ反映",
      "すべての問い合わせを記録し、答えられなかった質問を見直せる",
    ],
    highlights: [
      {
        title: "月額 0 円の構成",
        body: "サーバーを借りず、Google Apps Script とスプレッドシートで構成。自動返信は LINE の無料の返信機能だけを使い、月の送信数を消費しないようにしました。",
      },
      {
        title: "言い回しのゆれに強い判定",
        body: "全角／半角、カタカナ／ひらがなの違いを吸収。複数の質問に当たったときは長い言葉を優先し、「パーマとカラーの料金は？」に正しい答えを返します。",
      },
      {
        title: "本番で事故を起こさない手順",
        body: "ボタンメニューは、まずテスト用の 1 人にだけ表示し、確認してから友だち全員に公開する仕組みにしました。",
      },
      {
        title: "提案から運用まで一式",
        body: "提案書・WBS・見積もり・構成図に加え、専門用語を使わずスマホで読める運用マニュアル（画面キャプチャ 14 枚）を作成しました。",
      },
    ],
    tech: ["LINE Messaging API", "リッチメニュー", "Google Apps Script", "Google スプレッドシート"],
    role: "提案書・見積もり／設計／開発／テスト／運用マニュアル",
    facts: [
      { label: "返信までの時間", value: "約 2 秒（実測）" },
      { label: "月額費用", value: "0 円（自動返信のみ）" },
      { label: "開発工数", value: "見積もり 20 時間 → 4〜5 時間で完了" },
    ],
    tags: ["LINE", "業務効率化", "提案〜納品"],
    cover: { emoji: "💬", from: "#06C755", to: "#7DDBA3" },
    screenshots: [
      { src: "/works/line-bot/richmenu.png", alt: "4 つのボタンが並んだリッチメニュー", width: 2500, height: 843, caption: "トーク画面下のボタンメニュー（自作）" },
      { src: "/works/line-bot/notification.png", alt: "答えられなかった質問のオーナー向け通知", width: 868, height: 249, caption: "オーナーに届く通知" },
      { src: "/works/line-bot/faq-sheet.jpg", alt: "質問と回答を管理するスプレッドシート", width: 868, height: 1887, caption: "オーナーがスマホで直せる回答の表" },
    ],
  },
  {
    slug: "pickup",
    title: "送迎当番",
    catchphrase: "保育園・習い事の「今日は誰が送る？」を、家族で 1 つの画面に。",
    summary:
      "子どもを保育園や習い事に送る担当を、家族で共有する Web アプリです。パパ／ママのボタンを押すだけで決まり、変わったら家族のスマホに通知が届きます。毎週日曜の夜には、来週の予定を LINE のグループへ自動で送ります。",
    problem:
      "「明日どっちが送る？」を毎回 LINE でやり取りしていて、決まった内容が流れてしまう。行先や持ち物のメモも散らばる。",
    features: [
      "日ごとの送る人（パパ／ママ）をボタン 1 つで決める",
      "曜日ごとの「いつもの行先」を自動で入力。日ごとに書き換えも可能",
      "日ごとのメモ（メモがある日は一覧に印）",
      "ほかの家族が変更すると、スマホにプッシュ通知",
      "毎週日曜の夜、来週 1 週間分を LINE のグループへ自動配信",
    ],
    highlights: [
      {
        title: "通知と定期配信",
        body: "Web Push（PWA・iPhone 対応）で変更を家族に通知。Vercel Cron で毎週の予定を LINE に自動配信します。届かなくなった端末は自動で整理します。",
      },
      {
        title: "アカウント不要の安全なログイン",
        body: "家族で決めた合言葉 1 つで使えるようにし、署名付きの Cookie ですべてのページを保護しました。",
      },
      {
        title: "データはサーバーからだけ",
        body: "データベースはサーバーからだけ読み書きし、ブラウザ用の鍵では読めない設定にしています。",
      },
      {
        title: "日本時間で正しく動く",
        body: "サーバーは世界標準時で動くため、「今日」や週の切り替えを日本時間で計算しています。",
      },
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Supabase", "LINE Messaging API", "Web Push / PWA", "Vercel Cron", "Vitest"],
    repoUrl: "https://github.com/kotori-code/pickup-next",
    tags: ["LINE", "家族向け", "通知"],
    cover: { emoji: "🚸", from: "#F59E0B", to: "#FCD34D" },
    screenshots: [
      { src: "/works/pickup/home.png", alt: "1 週間の送る人の一覧", width: 780, height: 1688, caption: "一覧（来週）" },
      { src: "/works/pickup/detail.png", alt: "日ごとの詳細とメモ", width: 780, height: 1688, caption: "日ごとの詳細・メモ" },
      { src: "/works/pickup/settings.png", alt: "設定画面", width: 780, height: 1688, caption: "設定" },
      { src: "/works/pickup/login.png", alt: "合言葉の入力画面", width: 780, height: 1688, caption: "合言葉" },
    ],
  },
  {
    slug: "places",
    title: "行きたい場所リスト",
    catchphrase: "家族の「行ってみたい」を 1 か所に集めて、行く日を決める。",
    summary:
      "SNS やメモ、地図アプリにばらばらに残していた行きたい場所を、家族みんなで同じリストにまとめる Web アプリです。カテゴリで探し、行く日を決めると近い順に並びます。",
    problem:
      "行きたい場所が SNS の保存・メモ・地図アプリに散らばっていて、休みの日に「どこ行く？」となっても見つからない。",
    features: [
      "行きたい場所の登録・編集・削除（名前・カテゴリ・住所・URL・メモ）",
      "「まだ／行った」とカテゴリで絞り込み。カテゴリ別の件数",
      "行く日を決めると「日程を決めたもの」に近い順で表示（過ぎた予定は分けて表示）",
      "Google マップで開くリンク、「行った」の印",
      "誰が登録・更新したかを表示",
    ],
    highlights: [
      {
        title: "家族だけで使える手軽さ",
        body: "アカウント登録なしで、家族の合言葉 1 つで使えます。合言葉を変えると全員のログインが無効になります。",
      },
      {
        title: "迷わない一覧",
        body: "絞り込みと件数表示で、今どこに行けるかがすぐ分かるようにしました。",
      },
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Supabase", "Vercel", "Vitest"],
    repoUrl: "https://github.com/kotori-code/places-next",
    tags: ["家族向け", "データベース"],
    cover: { emoji: "📍", from: "#3B82F6", to: "#93C5FD" },
    screenshots: [
      { src: "/works/places/home.png", alt: "トップ画面", width: 840, height: 863, caption: "トップ" },
      { src: "/works/places/list.png", alt: "行きたい場所の一覧", width: 840, height: 863, caption: "リスト一覧" },
      { src: "/works/places/schedule.png", alt: "日程を決めた場所の一覧", width: 840, height: 863, caption: "日程を決めたもの" },
      { src: "/works/places/detail.png", alt: "場所の詳細", width: 840, height: 863, caption: "場所の詳細" },
    ],
  },
  {
    slug: "todo",
    title: "やることリスト（LINE 連携）",
    catchphrase: "LINE に送った文が、そのまま ToDo に。",
    summary:
      "タスクの追加・完了・削除ができる ToDo リストです。LINE の公式アカウントに送った文が 1 行 1 件のやることとして追加され、返事のリンクから画面で完了や削除ができます。",
    problem:
      "思いついたやることを、すぐ書き留めたい。わざわざアプリを開くより、いつも使っている LINE に送るだけで済ませたい。",
    features: [
      "やることの追加・完了・削除・元に戻す",
      "LINE に送った文を 1 行 1 件で追加。「一覧」と送ると未完了を返信",
      "LINE のリンクから開くと、画面で完了・削除",
      "ブラウザだけに保存していたやることと、LINE のリストを自動で 1 つにまとめる",
    ],
    highlights: [
      {
        title: "使いやすさの工夫を明文化",
        body: "押せる範囲を 44px 以上に、削除のあとは確認ダイアログではなく「元に戻す」を表示、読み上げやキーボード操作にも対応するなど、5 つの方針を決めて作りました。",
      },
      {
        title: "利用者ごとのリストを安全に",
        body: "LINE の利用者ごとのリストを秘密のトークンで見分け、保存にはトークンそのものではなくハッシュを使っています。",
      },
    ],
    tech: ["Next.js", "TypeScript", "Upstash Redis", "LINE Messaging API", "Vitest"],
    repoUrl: "https://github.com/kotori-code/todo-next",
    tags: ["LINE", "UI/UX"],
    cover: { emoji: "✅", from: "#8B5CF6", to: "#C4B5FD" },
    screenshots: [],
  },
  {
    slug: "weather",
    title: "お天気カレンダー",
    catchphrase: "カレンダーで日付を選んで、天気と「洗濯日和」をチェック。",
    summary:
      "都市名か現在地で、気温・天気・湿度・降水確率を表示する天気予報アプリです。カレンダーの日付は天気で色分けし、日中の天気から洗濯物の乾きやすさを ◎○△× で出します。",
    problem:
      "週の予定を立てるとき、日付ごとの天気と「洗濯物が乾くか」をひと目で知りたい。",
    features: [
      "都市名・現在地で天気を表示。カレンダーで日付を切り替え",
      "時間ごとの天気をバーで 1 時間ずつ確認",
      "洗濯日和予報（日中の降水確率・湿度・気温・風から ◎○△×）",
      "選んだ日の天気を LINE などに共有",
      "よく見る地点を 10 件まで登録",
    ],
    highlights: [
      {
        title: "API キーを守る作り",
        body: "天気のデータはサーバーから取りに行き、ブラウザには API キーを渡さない構成にしました。",
      },
      {
        title: "無料プランの限界を工夫で補う",
        body: "無料の予報は 3 時間ごとのため、前後の予報から 1 時間ごとの目安を計算して表示しています。",
      },
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "OpenWeatherMap API", "Vercel"],
    repoUrl: "https://github.com/kotori-code/weather-next",
    tags: ["外部 API", "生活"],
    cover: { emoji: "☀️", from: "#0EA5E9", to: "#FDE68A" },
    screenshots: [],
  },
];

export function getWork(slug: string): Work | undefined {
  return works.find((work) => work.slug === slug);
}
