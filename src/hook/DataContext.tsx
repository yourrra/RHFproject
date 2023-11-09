import { FC, createContext, useContext, useState, ReactNode } from 'react'
import { IData } from '../type/IData'

interface DataProviderProps {
  children: ReactNode
}

interface DataContextValue {
  data: IData
  setValues: (values: IData) => void
}

const initialData: IData = {
  firstName: '',
  lastName: '',
  email: '',
}

const DataContext = createContext<DataContextValue | undefined>(undefined)

export const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<IData>(initialData)
  const setValues = (values: IData) => {
    setData(prevData => ({
      ...prevData,
      ...values,
    }))
  }

  return (
    <DataContext.Provider value={{ data, setValues }}>
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => {
  const context = useContext(DataContext)
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}
