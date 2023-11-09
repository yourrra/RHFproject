import { useForm, SubmitHandler } from 'react-hook-form'
import { Form } from '../../components/form'
import { Input } from '../../components/input'
import { MainContainer } from '../../components/mainContainer'
import { Button } from '../../components/button/Button'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import * as URLS from '../../constants/urls'
import { FormControlLabel } from '@mui/material'
import { Checkbox } from '@mui/material'
import { useData } from '../../hook/DataContext'
import { IData } from '../../type/IData'

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email should have correct format')
    .required('Email is a required field'),
  phoneNumber: yup
    .string()
    .matches(/^[0-9+()-\s]{17}$/, 'Phone number should be 10 digits'),
})

export const Step2 = () => {
  const navigate = useNavigate()
  const { data, setValues } = useData()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<IData> = (data: IData) => {
    navigate(URLS.STEP3)
    setValues(data)
  }

  const hasPhone = watch('hasPhone')

  const phoneFormat = (phoneNumber: string, plus = false): string => {
    const startsWith = plus ? '+7' : '8'

    let phone = phoneNumber.replace(/[^0-9]/g, '')
    if (phone.startsWith('7') && plus) {
      phone = phone.substr(1)
    }
    if (phone.startsWith('8')) {
      phone = phone.substr(1)
    }

    return phone.replace(
      /(\d{3})(\d{3})(\d{2})(\d{2})/g,
      `${startsWith} ($1) $2-$3-$4`,
    )
  }

  const handlePhoneInputChange = e => {
    const phoneNumber = e.target.value
    const formattedPhoneNumber = phoneFormat(phoneNumber)
    setValue('phoneNumber', formattedPhoneNumber)
  }

  return (
    <MainContainer>
      <h2>Step 2</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('email')}
          id="email"
          label="Email"
          name="email"
          type="email"
          required
          error={!!errors.email}
          helperText={errors?.email?.message}
        />

        <FormControlLabel
          control={
            <Checkbox
              defaultValue={data.hasPhone}
              defaultChecked={data.hasPhone}
              name="hasPhone"
              color="primary"
              {...register('hasPhone')}
            />
          }
          label="Do you have a phone number"
        />

        {hasPhone && (
          <>
            <Input
              {...register('phoneNumber')}
              id="phoneNumber"
              type="tel"
              label="Phone Number"
              name="phoneNumber"
              onChange={handlePhoneInputChange}
              error={!!errors.phoneNumber}
              helperText={errors?.phoneNumber?.message}
            />
            <p>*Enter the phone number without the country code</p>
          </>
        )}
        <Button>Next</Button>
      </Form>
    </MainContainer>
  )
}
