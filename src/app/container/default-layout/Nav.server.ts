import { INavData } from '@coreui/angular';


export const navItems: INavData[] = [
  {
    name: '首頁',
    url: '/homepage',
    iconComponent: {
      name: 'cil-home',
    },
  },
  {
    name: '服務內容',
    iconComponent: {
      name: 'cil-list',
    },
    children:[
      {name: '各公司ESG儀表板', url: '/pages/companyDashboard',iconComponent: {name: 'cil-chart-line'}},
      {name: '產業ESG儀表板', url: '/pages/industryDashboard',iconComponent: {name: 'cil-chart-line'}},
      {name: '永續GPT', url: '/pages/sustainableGPT',iconComponent: {name: 'cil-chart-line'}},
    ]
  },
  {
    name: '新聞資訊',
    url: '/news',
    iconComponent: {
      name: 'cil-newspaper',
    },
  },
  {
    name: '技術執行',
    url: '/techniques',
    iconComponent: {
      name: 'cil-pencil',
    },
  },
  {
    name: '聯絡我們',
    url: '/contactUs',
    iconComponent: {
      name: 'cil-envelope-closed',
    },
  },
  {
    name: '其他頁面',
    url: '/pages',
    iconComponent: {
      name: 'cil-star',
    },
  },
];
