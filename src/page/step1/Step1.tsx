import { useForm, Resolver, SubmitHandler } from 'react-hook-form'
import { Form } from '../../components/form'
import { Input } from '../../components/input'
import { MainContainer } from '../../components/mainContainer'
import { Button } from '../../components/button/Button'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import * as URLS from '../../constants/urls'
import { useData } from '../../hook/DataContext'
import { IData } from '../../type/IData'

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
    .required('First name is a required field'),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
    .required('Last name is a required field'),
})

// const resolver: Resolver<IData> = async values => {
//   return {
//     values: values.firstName || values.lastName ? values : {},
//     errors: !values.firstName
//       ? {
//           firstName: {
//             type: 'required',
//             message: 'This is required.',
//           },
//           lastName: {
//             type: 'required',
//             message: 'This is required.',
//           },
//         }
//       : {},
//   }
// }

export const Step1 = () => {
  const navigate = useNavigate()
  const { data, setValues } = useData()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { firstName: data.firstName, lastName: data.lastName },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<IData> = (data: IData) => {
    navigate(URLS.STEP2)
    setValues(data)
  }

  return (
    <MainContainer>
      <h2>Step 1</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('firstName', { pattern: /^([^0-9]*)$/ })}
          id="firstName"
          label="First Name"
          name="firstName"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          {...register('lastName')}
          id="lastName"
          label="Last Name"
          name="lastName"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <Button>Next</Button>
      </Form>
    </MainContainer>
  )
}
