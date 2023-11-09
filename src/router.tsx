import { createBrowserRouter } from 'react-router-dom'
import * as URLS from './constants/urls'
import { Layout } from './components/layout/Layout'
import { Step1 } from './page/step1'
import { Step2 } from './page/step2'
import { Step3 } from './page/step3'
import { ErrorPage } from './page/error'
import { Result } from './page/result'

export const router = createBrowserRouter([
  {
    path: URLS.STEP1,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: URLS.STEP1,
        element: <Step1 />,
      },
      {
        path: URLS.STEP2,
        element: <Step2 />,
      },
      {
        path: URLS.STEP3,
        element: <Step3 />,
      },
      {
        path: URLS.RESULT,
        element: <Result />,
      },
    ],
  },
])
