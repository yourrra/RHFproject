import { SubmitHandler, useForm } from 'react-hook-form'
import { Form } from '../../components/form'
import { MainContainer } from '../../components/mainContainer'
import { Button } from '../../components/button/Button'
import { useNavigate } from 'react-router-dom'
import * as URLS from '../../constants/urls'
import { FileInput } from '../../components/fileInput/FileInput'
import { useData } from '../../hook/DataContext'
import { IData } from '../../type/IData'

export const Step3 = () => {
  const navigate = useNavigate()
  const { data, setValues } = useData()
  const { control, handleSubmit } = useForm<IData>({
    defaultValues: { files: data.files },
    mode: 'onBlur',
  })

  const onSubmit: SubmitHandler<IData> = (data: IData) => {
    navigate(URLS.RESULT)
    setValues(data)
  }

  return (
    <MainContainer>
      <h2>Step 3</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control} />
        <Button>Next</Button>
      </Form>
    </MainContainer>
  )
}
