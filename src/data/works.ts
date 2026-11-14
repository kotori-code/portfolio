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
    slug: "blog-autopost",
    title: "ブログ記事の下書き自動作成",
    catchphrase: "キーワードを入れるだけで、AI が記事の下書きを作り WordPress に保存。",
    summary:
      "SEO 対策のブログ記事づくりに 1 本 3 時間かけていた会社向けの仕組みです。スプレッドシートにキーワードを入れてチェックを付けると、AI がタイトル案と 2,000〜3,000 字の下書きを作り、WordPress に「下書き」として保存します。公開は担当者が確認してから行います。",
    notice:
      "課題の疑似案件として、提案書・要件定義・見積もりから開発・テスト・納品資料までを一通り制作しました。実在のお客様・WordPress サイトはありません（WordPress への保存は、本物と同じ応答をする仮のサーバーで確認しています）。",
    problem:
      "SEO 対策のブログを週 3 本、ネタ出しから執筆まで 1 本 3 時間（週 9 時間）かけている。キーワードはスプレッドシートで管理しているが、記事にする作業はすべて手作業。",
    features: [
      "キーワードから、切り口の違うタイトルを 5 案作成",
      "選んだタイトルで、導入 → 見出し 3 つ → まとめの下書きと、検索結果に出る説明文（120 字以内）を作成",
      "WordPress の REST API で「下書き」として保存し、状態・下書きの URL をシートに書き込む",
      "文字数・トーン・使わない表現・お手本の記事を、シートから変更できる",
      "うまくいかないときは、理由を日本語でシートに表示",
    ],
    highlights: [
      {
        title: "記事の質はテストで決める",
        body: "記事を 5 本作って確かめました。安いモデルでは字数が半分ほどで、お手本と同じ内容や根拠のない事例が出たため、原因を切り分け、モデルを変えて要件を満たしました。費用は 1 本約 7 円です。",
      },
      {
        title: "自動では公開しない安全な設計",
        body: "AI の誤りがそのまま公開されないよう、保存は下書きまで。WordPress には下書きしか作れない「寄稿者」の専用ユーザーで接続し、鍵が漏れても記事を公開されないようにしました。",
      },
      {
        title: "サイトが無くても確かめられる",
        body: "本物と同じ応答をする仮の WordPress を用意し、送信の中身と、パスワード違い・権限不足などのエラー 6 通りを確かめました。",
      },
      {
        title: "提案から納品資料まで一式",
        body: "提案書・要件定義書・WBS・構成図・テスト報告書に加え、API キー設定手順書・画面写真つきの使い方マニュアル・トラブルシューティングの 3 点を作成しました。",
      },
    ],
    tech: ["Google Apps Script", "Google スプレッドシート", "OpenAI API", "WordPress REST API", "Node.js（テスト）"],
    role: "提案書・要件定義・見積もり／設計／開発／テスト／納品資料",
    facts: [
      { label: "記事 1 本の費用", value: "約 7 円（月 13 本で約 100 円・試算）" },
      { label: "作成にかかる時間", value: "タイトル案 約 30 秒・本文 1〜2 分" },
      { label: "開発工数", value: "見積もり 45 時間 → 8 時間で完了" },
    ],
    repoUrl: "https://github.com/kotori-code/blog-draft-autopost",
    tags: ["AI", "業務効率化", "提案〜納品"],
    cover: { emoji: "📝", from: "#2271B1", to: "#8EC5EA" },
    screenshots: [
      { src: "/works/blog-autopost/architecture.png", alt: "スプレッドシート・Apps Script・OpenAI・WordPress のつながりを示した構成図", width: 1800, height: 1130, caption: "構成図" },
      { src: "/works/blog-autopost/titles.png", alt: "キーワードから作られたタイトル 5 案と、採用する案の番号", width: 669, height: 232, caption: "キーワードから作ったタイトル 5 案" },
      { src: "/works/blog-autopost/created.png", alt: "作成済のステータス・タイトル・WordPress の URL・説明文が入った行", width: 878, height: 202, caption: "下書きの保存後に入る URL と説明文" },
      { src: "/works/blog-autopost/settings.png", alt: "文字数・読者・トーンなどを変えられる設定シート", width: 950, height: 368, caption: "書き方を変えられる設定シート" },
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
