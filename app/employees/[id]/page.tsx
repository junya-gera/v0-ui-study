"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { EMPLOYEES } from "@/lib/mockData"

export default function EmployeeDetailPage() {
  const params = useParams()
  const id = Number(params.id)
  const employee = EMPLOYEES.find((emp) => emp.id === id)

  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

  if (!employee) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600 text-lg mb-4">社員が見つかりません</p>
            <Link
              href="/employees"
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
            >
              一覧に戻る
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // 日付フォーマット関数
  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
  }

  const handleDelete = () => {
    console.log("削除処理:", employee.name)
    setShowDeleteDialog(false)
    // 実際の削除処理はここに実装
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="mx-auto max-w-4xl">
        {/* ヘッダー */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">社員詳細</h1>

          {/* 操作ボタン群 */}
          <div className="flex items-center gap-3">
            <button
              className="inline-flex items-center gap-2 p-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="メモを表示"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </button>

            <button
              className="inline-flex items-center gap-2 p-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="PDFとして保存"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </button>

            <button
              className="p-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="印刷"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
            </button>

            <button
              className="p-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="編集"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* 情報をごちゃ混ぜにした悪い例セクション */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            社員情報
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <dt className="text-sm font-semibold text-gray-600">氏名</dt>
              <dd className="mt-1 text-base text-gray-900">{employee.name}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-gray-600">社員番号</dt>
              <dd className="mt-1 text-base text-gray-900">{employee.employeeId}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-gray-600">生年月日</dt>
              <dd className="mt-1 text-base text-gray-900">{formatDate(employee.birthDate)}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-gray-600">部署</dt>
              <dd className="mt-1 text-base text-gray-900">{employee.department}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-gray-600">血液型</dt>
              <dd className="mt-1 text-base text-gray-900">{employee.bloodType || "-"}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-gray-600">役職</dt>
              <dd className="mt-1 text-base text-gray-900">{employee.position || "-"}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-gray-600">勤務状況</dt>
              <dd className="mt-1 text-base text-gray-900">{employee.employmentStatus || "-"}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-gray-600">電話番号</dt>
              <dd className="mt-1 text-base text-gray-900">{employee.phone || "-"}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-gray-600">入社日</dt>
              <dd className="mt-1 text-base text-gray-900">{employee.hireDate}</dd>
            </div>
            <div className="md:col-span-3">
              <dt className="text-sm font-semibold text-gray-600">住所</dt>
              <dd className="mt-1 text-base text-gray-900">{employee.address}</dd>
            </div>
            <div className="md:col-span-3">
              <dt className="text-sm font-semibold text-gray-600">緊急連絡先</dt>
              <dd className="mt-1 text-base text-gray-900">{employee.emergencyContact || "-"}</dd>
            </div>
            <div className="md:col-span-3">
              <dt className="text-sm font-semibold text-gray-600">趣味</dt>
              <dd className="mt-1 text-base text-gray-900">
                {employee.hobbies && employee.hobbies.length > 0 ? employee.hobbies.join("、") : "-"}
              </dd>
            </div>
            <div className="md:col-span-3">
              <dt className="text-sm font-semibold text-gray-600">主なスキル</dt>
              <dd className="mt-1 text-base text-gray-900">
                {employee.skills && employee.skills.length > 0 ? employee.skills.join("、") : "-"}
              </dd>
            </div>
            <div className="md:col-span-3">
              <dt className="text-sm font-semibold text-gray-600">保有資格</dt>
              <dd className="mt-1 text-base text-gray-900">
                {employee.qualifications.length > 0 ? employee.qualifications.join("、") : "なし"}
              </dd>
            </div>
            <div className="md:col-span-3">
              <dt className="text-sm font-semibold text-gray-600">自己紹介</dt>
              <dd className="mt-1 text-base text-gray-900 whitespace-pre-line">{employee.selfIntro || "-"}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-gray-600">性別</dt>
              <dd className="mt-1 text-base text-gray-900">{employee.gender || "-"}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-gray-600">勤務拠点</dt>
              <dd className="mt-1 text-base text-gray-900">{employee.workLocation || "-"}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-gray-600">上長</dt>
              <dd className="mt-1 text-base text-gray-900">{employee.manager || "-"}</dd>
            </div>
          </div>
        </div>

        {/* アクションボタン */}
        <div className="flex gap-4 items-center">
          <Link
            href="/employees"
            className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            一覧に戻る
          </Link>

          <button
            onClick={() => setShowDeleteDialog(true)}
            className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            社員を削除する
          </button>
        </div>

        {/* 削除確認ダイアログ */}
        {showDeleteDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">削除の確認</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                社員 <span className="font-semibold">{employee.name}</span> のデータを削除しますか？{" "}
                この操作は取り消せません。
              </p>
              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setShowDeleteDialog(false)}
                  className="px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  いいえ
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  はい
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
