import { FormHTMLAttributes, PropsWithChildren } from 'react'

import styles from './Form.module.css'

type FormProps = PropsWithChildren & FormHTMLAttributes<HTMLFormElement>

export const Form = ({ children, ...htmlFormElement }: FormProps) => {
  return (
    <form noValidate className={styles.Form} {...htmlFormElement}>
      {children}
    </form>
  )
}
