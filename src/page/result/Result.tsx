import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { MainContainer } from '../../components/mainContainer'
import { useData } from '../../hook/DataContext'
import { InsertDriveFile } from '@mui/icons-material'
import { Button } from '../../components/button/Button'
import Swal from 'sweetalert2'
import { useState } from 'react'
import ReactConfetti from 'react-confetti'

export const Result = () => {
  const { data } = useData()
  const [success, setSuccess] = useState(false)
  const entries = Object.entries(data).filter(entry => entry[0] !== 'files')
  const { files } = data

  // const onSubmit = async () => {
  //   const formData = new FormData()

  //   if (data.files) {
  //     data.files.forEach(file => {
  //       formData.append('files', file, file.name)
  //     })
  //   }

  //   entries.forEach(entry => {
  //     formData.append(entry[0], entry[1])
  //   })

  //   const res = await fetch('', {
  //     method: 'POST',
  //     body: formData,
  //   })

  //   if (res.status === 200) {
  //     Swal.fire('Great job!', "You've passed the challenge", 'success')
  //     setSuccess(true)
  //   }
  // }

  const onSubmit = () => {
    setSuccess(true)
  }

  if (success) {
    Swal.fire('Great job!', 'Data sent to server', 'success')
    return <ReactConfetti />
  }

  return (
    <MainContainer>
      <h2>Form Values</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Field</TableCell>
              <TableCell align="right">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map(entry => (
              <TableRow>
                <TableCell>{entry[0]}</TableCell>
                <TableCell align="right">{entry[1].toString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {files && (
        <>
          <h2>Files</h2>
          <List>
            {files.map((file, index) => (
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
      <Button onClick={onSubmit}>Submit</Button>
    </MainContainer>
  )
}
