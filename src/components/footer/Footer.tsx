import { Link } from 'react-router-dom'
import * as URLS from '../../constants/urls'

import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <Link to={URLS.STEP1} className={styles.Link}>
        <h3>Start Over</h3>
      </Link>
    </footer>
  )
}
