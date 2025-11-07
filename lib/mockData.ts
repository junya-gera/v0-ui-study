// 部署マスタ (フィルタ用)
export const DEPARTMENTS: string[] = ["営業部", "開発部", "人事部", "情報システム部"]

// 社員データの型定義
export type Employee = {
  id: number
  employeeId: string
  name: string
  department: string
  employmentType: "新卒" | "中途"
  hireDate: string // ISO形式 (例: '2020-04-01')
  address: string
  birthDate: string
  qualifications: string[]
}

// 社員データ本体
export const EMPLOYEES: Employee[] = [
  {
    id: 1,
    employeeId: "E1001",
    name: "山田 太郎",
    department: "営業部",
    employmentType: "新卒",
    hireDate: "2020-04-01",
    address: "東京都新宿区西新宿2-8-1",
    birthDate: "1997-05-10",
    qualifications: ["TOEIC 800点", "普通自動車免許"],
  },
  {
    id: 2,
    employeeId: "E1002",
    name: "佐藤 花子",
    department: "開発部",
    employmentType: "中途",
    hireDate: "2022-11-01",
    address: "神奈川県横浜市中区日本大通1",
    birthDate: "1995-02-15",
    qualifications: ["基本情報技術者", "応用情報技術者"],
  },
  {
    id: 3,
    employeeId: "E1003",
    name: "鈴木 一郎",
    department: "開発部",
    employmentType: "新卒",
    hireDate: "2024-04-01",
    address: "埼玉県さいたま市浦和区高砂3-15-1",
    birthDate: "2001-08-30",
    qualifications: [],
  },
  // 追加データ (情報システム部は含めない)
  {
    id: 4,
    employeeId: "E1004",
    name: "高橋 裕子",
    department: "営業部",
    employmentType: "中途",
    hireDate: "2021-06-15",
    address: "東京都渋谷区渋谷2-21-1",
    birthDate: "1992-09-12",
    qualifications: ["日商簿記2級"],
  },
  {
    id: 5,
    employeeId: "E1005",
    name: "井上 剛",
    department: "開発部",
    employmentType: "中途",
    hireDate: "2019-02-01",
    address: "千葉県千葉市中央区市場町1-1",
    birthDate: "1988-11-03",
    qualifications: ["AWS認定ソリューションアーキテクト"],
  },
  {
    id: 6,
    employeeId: "E1006",
    name: "松本 京子",
    department: "人事部",
    employmentType: "新卒",
    hireDate: "2023-04-01",
    address: "大阪府大阪市北区梅田3-1-1",
    birthDate: "2000-07-22",
    qualifications: ["TOEIC 730点"],
  },
  {
    id: 7,
    employeeId: "E1007",
    name: "渡辺 大樹",
    department: "営業部",
    employmentType: "新卒",
    hireDate: "2022-04-01",
    address: "愛知県名古屋市中区三の丸1-1-1",
    birthDate: "1999-03-18",
    qualifications: [],
  },
  {
    id: 8,
    employeeId: "E1008",
    name: "中村 美咲",
    department: "開発部",
    employmentType: "新卒",
    hireDate: "2023-04-01",
    address: "北海道札幌市中央区北2条西4丁目",
    birthDate: "2000-12-05",
    qualifications: ["基本情報技術者"],
  },
  {
    id: 9,
    employeeId: "E1009",
    name: "石井 亮介",
    department: "営業部",
    employmentType: "中途",
    hireDate: "2018-10-01",
    address: "福岡県福岡市中央区天神1-1-1",
    birthDate: "1986-04-27",
    qualifications: ["宅地建物取引士"],
  },
  {
    id: 10,
    employeeId: "E1010",
    name: "小林 里奈",
    department: "人事部",
    employmentType: "中途",
    hireDate: "2020-01-06",
    address: "京都府京都市下京区東塩小路町",
    birthDate: "1993-06-11",
    qualifications: ["社会保険労務士"],
  },
  {
    id: 11,
    employeeId: "E1011",
    name: "森田 健",
    department: "開発部",
    employmentType: "中途",
    hireDate: "2021-09-01",
    address: "茨城県水戸市三の丸1-4-1",
    birthDate: "1990-02-08",
    qualifications: ["LPIC Level1", "Pythonエンジニア認定基礎"],
  },
  {
    id: 12,
    employeeId: "E1012",
    name: "藤田 彩",
    department: "営業部",
    employmentType: "新卒",
    hireDate: "2024-04-01",
    address: "宮城県仙台市青葉区本町3-8-1",
    birthDate: "2001-01-14",
    qualifications: [],
  },
  {
    id: 13,
    employeeId: "E1013",
    name: "青木 直樹",
    department: "開発部",
    employmentType: "中途",
    hireDate: "2017-07-03",
    address: "広島県広島市中区国泰寺町1-6-34",
    birthDate: "1985-05-19",
    qualifications: ["応用情報技術者", "Oracle Bronze"],
  },
]
