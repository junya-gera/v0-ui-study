"use client"

import type React from "react"

import { useState } from "react"

export default function EventRegistrationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    participationType: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    participationType: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [showLTInfo, setShowLTInfo] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      participationType: "",
    }

    let isValid = true

    // 氏名のバリデーション
    if (!formData.name.trim()) {
      newErrors.name = "氏名を入力してください"
      isValid = false
    }

    // メールアドレスのバリデーション
    if (!formData.email.trim()) {
      newErrors.email = "メールアドレスを入力してください"
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "正しいメールアドレスの形式で入力してください"
      isValid = false
    }

    // 参加区分のバリデーション
    if (!formData.participationType) {
      newErrors.participationType = "参加区分を選択してください"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsLoading(true)

      // ダミーの送信処理（3秒待機）
      setTimeout(() => {
        setIsLoading(false)
        setIsSubmitted(true)
        console.log("登録データ:", formData)
      }, 3000)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // エラーをクリア
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleReturnHome = () => {
    setIsSubmitted(false)
    setFormData({
      name: "",
      email: "",
      participationType: "",
    })
    setErrors({
      name: "",
      email: "",
      participationType: "",
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full text-center">
          <div className="mb-4">
            <svg className="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">登録完了</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            参加登録が完了しました。
            <br />
            ご登録いただいたメールアドレスに確認メールをお送りしました。
          </p>
          <button
            onClick={handleReturnHome}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            ホームへ戻る
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4">
      <main className="max-w-lg mx-auto">
        {/* イベントタイトル */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 text-balance">モダンWeb開発 勉強会</h1>

          {/* イベント概要 */}
          <div className="space-y-2 text-gray-700 leading-relaxed">
            <p className="flex items-center gap-2">
              <span className="font-semibold">日時:</span>
              <span>2025年11月15日（土）14:00〜17:00</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold">場所:</span>
              <span>オンライン（Zoom）</span>
            </p>
          </div>
        </div>

        {/* 注意事項 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">注意事項</h2>
          <ul className="space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
            <li>参加URLは開催前日にメールでお送りします</li>
            <li>カメラOFFでの参加も可能です</li>
            <li>録画・録音はご遠慮ください</li>
            <li>質問はチャットでお気軽にどうぞ</li>
          </ul>

          <div className="mt-4">
            <a href="#" className="text-blue-600 underline hover:text-blue-800 transition-colors">
              過去のイベントレポートはこちら
            </a>
          </div>
        </div>

        {/* 参加登録フォーム */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">参加登録フォーム</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* 氏名 */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                氏名{" "}
                <span className="text-red-600" aria-label="必須">
                  *
                </span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            {/* メールアドレス */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                メールアドレス{" "}
                <span className="text-red-600" aria-label="必須">
                  *
                </span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            {/* 参加区分 */}
            <div>
              <fieldset>
                <legend className="block text-sm font-semibold text-gray-700 mb-2">
                  参加区分{" "}
                  <span className="text-red-600" aria-label="必須">
                    *
                  </span>
                </legend>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="general"
                      name="participationType"
                      value="general"
                      checked={formData.participationType === "general"}
                      onChange={(e) => handleInputChange("participationType", e.target.value)}
                      className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                    />
                    <label htmlFor="general" className="ml-2 text-gray-700">
                      一般枠
                    </label>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="lt"
                        name="participationType"
                        value="lt"
                        checked={formData.participationType === "lt"}
                        onChange={(e) => handleInputChange("participationType", e.target.value)}
                        className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                      />
                      <label htmlFor="lt" className="ml-2 text-gray-700">
                        LT枠
                      </label>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowLTInfo(!showLTInfo)}
                      className="ml-2 w-5 h-5 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-600 text-sm font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                      aria-label="LT枠の説明を表示"
                      aria-expanded={showLTInfo}
                    >
                      ?
                    </button>
                  </div>

                  {showLTInfo && (
                    <div className="ml-6 p-3 bg-blue-50 border-l-4 border-blue-500 text-sm text-gray-700 leading-relaxed">
                      5分間の発表準備が必要です。テーマは自由ですが、Web開発に関連する内容をお願いします。
                    </div>
                  )}
                </div>

                {errors.participationType && (
                  <p className="mt-2 text-sm text-red-600" role="alert">
                    {errors.participationType}
                  </p>
                )}
              </fieldset>
            </div>

            {/* 登録ボタン */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-md shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  送信中...
                </span>
              ) : (
                "参加登録する"
              )}
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}
