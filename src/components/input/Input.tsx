import TextField from '@mui/material/TextField'
import { forwardRef } from 'react'

type InputProps = {
  id: string
  name: string
  label: string
  error: boolean
  helperText: string | undefined
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, label, error, helperText, ...htmlInputProps }, ref) => {
    return (
      <TextField
        variant="outlined"
        margin="normal"
        inputRef={ref}
        fullWidth
        id={id}
        name={name}
        label={label}
        error={error}
        helperText={helperText}
        {...htmlInputProps}
      />
    )
  },
)
