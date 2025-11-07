import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = { robots: { index: false, follow: false } }

export default function EventIntro() {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6"
      aria-labelledby="page-title"
    >
      <section className="max-w-xl w-full bg-white border border-gray-200 rounded-xl shadow-sm p-8">
        <h1 id="page-title" className="text-3xl font-bold text-gray-900 mb-5 tracking-tight">
          モダンWeb開発 勉強会 2025 参加案内
        </h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          フロントエンドと最新のWebエコシステムをテーマにした少人数オンライン勉強会です。React / Next.js、パフォーマンス、アクセシビリティ、開発体験向上などをカジュアルに共有・議論します。
        </p>
        <ul className="space-y-2 mb-6 text-sm text-gray-600">
          <li className="flex gap-2"><span className="font-semibold text-gray-800">開催日時:</span> 2025年11月15日（土）14:00〜17:00</li>
          <li className="flex gap-2"><span className="font-semibold text-gray-800">形式:</span> オンライン (Zoom)</li>
          <li className="flex gap-2"><span className="font-semibold text-gray-800">内容:</span> LT / ディスカッション / 質問タイム</li>
          <li className="flex gap-2"><span className="font-semibold text-gray-800">対象:</span> 初〜中級のフロントエンド / Webエンジニア</li>
        </ul>
        <div className="rounded-md bg-blue-50 border border-blue-100 p-4 mb-6 text-sm text-blue-800">
          LT参加枠もあります。アウトプットしたい方はフォーム内で「LT枠」を選択してください。
        </div>
        <div className="space-y-4">
          <Link
            href="/form"
            className="block w-full text-center rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="参加登録フォームへ進む"
          >
            参加登録フォームへ進む
          </Link>
        </div>
      </section>
    </main>
  )
}
