import { Outlet } from 'react-router-dom'
import { Header } from '../header'
import { Footer } from '../footer'

import styles from './Layout.module.css'

export const Layout = () => {
  return (
    <div className={styles.Layout}>
      <Header />
      <main className={styles.Main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
