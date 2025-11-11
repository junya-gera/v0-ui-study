"use client"
import { useRouter } from "next/navigation"

export default function ReportsPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-10 px-6">
      <main className="max-w-3xl mx-auto space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">過去イベントレポート</h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            過去に開催された勉強会・LT会の簡易レポート集です。
          </p>
        </header>

        <section className="space-y-6">
          {[
            { id: 1, title: "モダンWeb開発 勉強会 #1", date: "2025/09/12", summary: "Reactサーバーコンポーネントとキャッシュ戦略について雑多に議論。" },
            { id: 2, title: "モダンWeb開発 勉強会 #2", date: "2025/10/10", summary: "フォームUX改善案を出しながら結局悪いUIデモを量産。" },
            { id: 3, title: "LT会 秋版", date: "2025/10/31", summary: "5分LTがほぼ全員時間オーバーしタイムキープ失敗。" },
          ].map((r) => (
            <article key={r.id} className="bg-white rounded-md shadow-sm border border-gray-200 p-5 space-y-2">
              <h2 className="text-xl font-semibold text-gray-800">{r.title}</h2>
              <div className="text-xs text-gray-500">開催日: {r.date}</div>
              <p className="text-sm text-gray-700 leading-relaxed">{r.summary}</p>
            </article>
          ))}
        </section>
      <div className="pt-4">
        <button
          type="button"
          onClick={() => router.push("/form")}
          className="cursor-pointer inline-flex items-center gap-1 px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 text-sm shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          登録フォームへ戻る
        </button>
      </div>
      </main>
    </div>
  )
}