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
  /** 練習・課題で作ったものなど、読み手に最初に伝えるべき注記 */
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
      "サンプルとして制作しました。実在のお店・お客様はいません。",
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
      "サンプルとして制作しました。実在のお客様・WordPress サイトはありません（WordPress への保存は、本物と同じ応答をする仮のサーバーで確認しています）。",
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
    role: "要件定義・提案書・見積もり／設計／開発／テスト／納品資料",
    facts: [
      { label: "記事 1 本の費用", value: "約 7 円（月 13 本で約 100 円・試算）" },
      { label: "作成にかかる時間", value: "タイトル案 約 30 秒・本文 1〜2 分" },
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
    slug: "doc-search-ai",
    title: "社内文書検索 AI",
    catchphrase: "社内のマニュアル・規程に、AI がチャットで出典付きで答える。",
    summary:
      "マニュアルや規程があちこちに散らばり、新入社員が毎回先輩に聞いていた会社向けのチャットです。社内の PDF を AI に読み込ませ、質問すると文書の内容だけをもとに答えます。答えには文書名・ページと元の PDF へのリンク（出典）が付き、文書にないことは推測せず「見つかりませんでした」と返します。",
    notice:
      "サンプルとして制作しました。実在のお客様はいません（文書も架空の会社のものです）。",
    problem:
      "マニュアル・規程が PDF・Word・Confluence に約 650 件散らばっている。新入社員は探し方が分からずそのたびに先輩に聞き、先輩も同じ質問に何度も答えている。社外に情報が漏れるのは絶対に避けたい。",
    features: [
      "チャットで質問すると、社内文書をもとに日本語で回答",
      "回答の根拠（文書名・ページ）を表示し、元の PDF の該当ページを開ける",
      "文書に答えがないときは、推測せず「見つかりませんでした」と返す",
      "PDF から文字を取り出し、短く区切って検索用のデータを作成",
      "会社のメールアドレスの人だけが使えるログイン",
      "管理画面で、質問の記録の確認と、PDF の追加・更新・削除",
    ],
    highlights: [
      {
        title: "精度を数字で確かめる",
        body: "「80% 以上で正確に」という要望を、評価用の 50 問で「回答と出典の両方が正しい」ものを数える基準にしました。間違えた質問の原因を一つずつ切り分けて調整し、50 問中 48 問（96%）で合格しました。",
      },
      {
        title: "推測で答えない AI",
        body: "意味の近い文章を 5 件探し、AI にはその文章だけを渡して答えさせます。文書にないことは答えないように指示し、もっともらしい作り話が社内に広まるのを防ぎます。",
      },
      {
        title: "情報を社外に出さない構成",
        body: "文書と質問の記録は Supabase の東京リージョンに置き、画面と処理も東京で動かします。AI は入力内容が学習に使われないサービスを使い、本番ではお客様の AWS（Amazon Bedrock・東京）に替える構成で提案しました。",
      },
      {
        title: "提案から引き継ぎ資料まで一式",
        body: "要件定義書・提案書・WBS・構成図に加え、管理者マニュアル・社員向けの利用ガイド・技術の引き継ぎ資料（API 仕様・データベース設計）と、Phase 2 の提案書（機能ごとの料金表）を作成しました。",
      },
    ],
    tech: ["Next.js 16", "TypeScript", "Supabase（PostgreSQL・pgvector・Storage）", "OpenAI API", "Vercel", "Vitest"],
    role: "要件定義・提案書・見積もり／設計／開発／テスト（精度の評価）／納品資料／次の段階の提案",
    facts: [
      { label: "精度", value: "評価用 50 問中 48 問（96%）／目標 80%" },
      { label: "対象の文書", value: "PDF（Word・Confluence は Phase 2 で提案）" },
    ],
    tags: ["AI", "業務効率化", "提案〜納品"],
    cover: { emoji: "📚", from: "#4F46E5", to: "#A5B4FC" },
    screenshots: [
      { src: "/works/doc-search-ai/chat.png", alt: "質問への回答と出典（文書名・ページ・元の PDF へのリンク）、文書にない質問への「見つかりませんでした」の返答が並んだチャット画面", width: 622, height: 612, caption: "チャット画面（出典付きの回答と、文書にないときの返答）" },
      { src: "/works/doc-search-ai/architecture.png", alt: "社員の質問が画面とサーバーを通り、文書の保管庫で近い文章を探して AI が答える流れを示した構成図", width: 1520, height: 904, caption: "構成図（質問の流れと、文書が入る流れ）" },
    ],
  },
  {
    slug: "ec-cs-chatbot",
    title: "EC サイトの問い合わせチャット（AI ＋ 有人対応）",
    catchphrase: "よくある質問は AI が即答し、それ以外はオペレーターがその場で返信する。",
    summary:
      "Shopify のお店の問い合わせを、フォームからチャットに置き換えるシステムです。返品・送料などのよくある質問は AI が FAQ だけをもとに数秒で答え、FAQ にない質問・手続きが必要な問い合わせ・クレームはオペレーターに引き継ぎます。オペレーターは管理画面からその場で返信でき、お客さまの画面にすぐ表示されます。",
    notice:
      "サンプルとして制作しました。実在のお店・お客様はいません。",
    problem:
      "月 約 500 件の問い合わせを問い合わせフォームだけで受けていて、返信まで 1〜2 日かかる。返事を待つ間にお客さまが離れてしまう。オペレーターは 2 名で、すべてにすぐ返事をするのは難しい。",
    features: [
      "Shopify のサイトにタグを 1 行貼るだけで、右下にチャットの開閉ボタンを表示（スマホは全画面）",
      "よくある質問に、AI が FAQ だけをもとに回答。FAQ にないことは推測せず、オペレーターに引き継ぐ",
      "引き継ぐときはメールアドレスを聞き、営業時間外は「翌営業日にメールでご連絡します」と案内",
      "管理画面で、問い合わせの一覧（未対応が上）・会話を開いてその場で返信・対応済み",
      "お客さまの質問は管理画面に、オペレーターの返信はチャット画面に、すぐ表示（リアルタイム）",
      "ブランドカラー・ロゴ・店名を 1 か所で変えられる。ページを移動しても会話の続きから話せる",
    ],
    highlights: [
      {
        title: "AI と人で分担する",
        body: "AI には「FAQ に書いてあることだけ答え、根拠の FAQ 番号を返す」ように指示し、根拠のない答えは使わずに人へ回します。返品など手続きが必要な問い合わせは、FAQ の条件を案内したうえで人にも回し、お客さまに同じことを二度書かせないようにしました。",
      },
      {
        title: "会話はオペレーターと本人しか読めない",
        body: "会話の記録は Supabase の東京リージョンに保存し、データベースの行ごとに読める人を決める設定（RLS）で、オペレーターと本人以外は読めないようにしました。お客さまは会員登録なしで使え、自分の会話だけを読めます。読める人・書ける人の 20 項目を、本物のデータベースで確かめました。",
      },
      {
        title: "テストで期待どおりかを毎回確かめる",
        body: "お客様から渡された「テスト用の会話 8 件と期待される動き」を、コマンド 1 つで流して確かめられるようにしました。小さな部品を作っては組み合わせる 4 回の節目ごとに流し、8 件すべて期待どおりになることを確認しました。",
      },
      {
        title: "利用料が増えすぎない作り",
        body: "1 人あたりの送信回数と、1 日に AI を呼ぶ回数に上限を付けました。上限を超えたときは AI を呼ばずにオペレーターに回すので、お客さまへの返事は止まりません。",
      },
    ],
    tech: ["Next.js 16", "TypeScript", "Supabase（PostgreSQL・Auth・Realtime）", "OpenAI API（本番は Claude API を想定）", "Vercel", "Vitest"],
    role: "要件定義・提案書・見積もり／設計／開発／テスト（セキュリティの確認を含む）／納品資料／次の段階の提案",
    tags: ["AI", "EC", "提案〜納品"],
    cover: { emoji: "💬", from: "#1F6F5C", to: "#86C5B4" },
    screenshots: [
      { src: "/works/ec-cs-chatbot/chat-answer.png", alt: "お店の画面の右下に開いたチャットで、送料の質問に AI が FAQ をもとに答え、壊れた商品の問い合わせにおわびと交換の条件を案内している画面", width: 364, height: 660, caption: "チャット画面（よくある質問に AI が回答）" },
      { src: "/works/ec-cs-chatbot/chat-handoff.png", alt: "お客さまが担当者との会話を希望し、AI が交換の条件を案内したうえで、営業時間外のため翌営業日にメールで連絡すると案内し、担当者に引き継いだ画面", width: 364, height: 660, caption: "担当者への引き継ぎ（時間外は翌営業日にメールで連絡）" },
      { src: "/works/ec-cs-chatbot/admin.png", alt: "管理画面の会話の一覧。未対応の問い合わせが上に並び、人に回した理由・時刻・メールアドレスの有無・最後のメッセージと、「開いて返信」「対応済みにする」のボタンが表示されている", width: 1550, height: 600, caption: "管理画面（未対応が上。開いてその場で返信）" },
      { src: "/works/ec-cs-chatbot/architecture.png", alt: "お客さまの質問がチャット画面から AI 応答の処理に渡り、Claude API が FAQ をもとに答え、答えられないものは Supabase を通じて管理画面のオペレーターに届き、返信がチャット画面にすぐ表示される流れを示した構成図", width: 1520, height: 880, caption: "構成図（AI が答える流れと、オペレーターに引き継ぐ流れ）" },
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
