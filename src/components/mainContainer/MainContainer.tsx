import { FC, ReactNode } from 'react'

import styles from './MainContainer.module.css'

interface Props {
  children: ReactNode
}

export const MainContainer: FC<Props> = ({ children }) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Container}>{children}</div>
    </div>
  )
}
