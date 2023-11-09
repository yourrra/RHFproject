import { type PropsWithChildren, FC, ButtonHTMLAttributes } from 'react'
import { Button as MuiButton } from '@mui/material'

type Props = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<Props> = ({ children, ...htmlButtonProps }) => {
  return (
    <MuiButton
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      {...htmlButtonProps}
    >
      {children}
    </MuiButton>
  )
}
