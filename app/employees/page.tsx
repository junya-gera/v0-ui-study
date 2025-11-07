"use client"

import { useState } from "react"
import Link from "next/link"
import { DEPARTMENTS, EMPLOYEES } from "@/lib/mockData"

export default function EmployeesListPage() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("すべての部署")

  // フィルタリング処理
  const filteredEmployees =
    selectedDepartment === "すべての部署" ? EMPLOYEES : EMPLOYEES.filter((emp) => emp.department === selectedDepartment)

  // 日付フォーマット関数
  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">社員一覧</h1>

        {/* 部署フィルタ */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <label htmlFor="department-filter" className="block text-sm font-semibold text-gray-700 mb-2">
            部署で絞り込み
          </label>
          <select
            id="department-filter"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="すべての部署">すべての部署</option>
            {DEPARTMENTS.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        {/* 社員一覧テーブル */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* 件数表示ヘッダー */}
          <div className="flex justify-end items-center px-6 py-3 border-b border-gray-200 bg-white">
            <p className="text-sm text-gray-600" aria-live="polite">
              表示件数: <span className="font-semibold text-gray-900">{filteredEmployees.length}</span>件
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    社員番号
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    氏名
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    部署
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    採用区分
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    入社日
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    操作
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredEmployees.length > 0 ? (
                  filteredEmployees.map((employee) => (
                    <tr key={employee.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900">{employee.employeeId}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">{employee.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900">{employee.department}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900">{employee.employmentType}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900">
                        {formatDate(employee.hireDate)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-base">
                        <Link
                          href={`/employees/${employee.id}`}
                          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          詳細
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                      該当する社員がいません
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
