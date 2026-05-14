import { Global } from '@emotion/react'
import { useState } from 'react'
import { reset } from './styles/reset'
import MainLayout from './components/MainLayOut/MainLayOut'
import MainRountes from './routes/MainRoutes'

function App() {


  return (
    <>
      <Global styles={reset} />
      <MainLayout>
        <MainRountes />
      </MainLayout>
    </>
  )
}

export default App
