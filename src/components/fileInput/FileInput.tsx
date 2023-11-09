import { CloudUpload, InsertDriveFile } from '@mui/icons-material'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@mui/material'
import Dropzone from 'react-dropzone'
import { Control, Controller } from 'react-hook-form'

import styles from './FileInput.module.css'

type Props = {
  name: string
  control: Control
}

export const FileInput = ({ control, name }: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ field: { onChange, onBlur, value } }) => (
        <>
          <Dropzone onDrop={onChange}>
            {({ getRootProps, getInputProps }) => (
              <Paper
                className={styles.DropFile}
                variant="outlined"
                {...getRootProps()}
              >
                <CloudUpload />
                <input {...getInputProps()} name={name} onBlur={onBlur} />
                <p>Drag 'n' drop files, or click to select files</p>
              </Paper>
            )}
          </Dropzone>
          <List className={styles.List}>
            {value.map((file: File, index: number) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <InsertDriveFile />
                </ListItemIcon>
                <ListItemText primary={file.name} secondary={file.size} />
              </ListItem>
            ))}
          </List>
        </>
      )}
    />
  )
}
