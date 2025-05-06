
import { RouterProvider } from 'react-router-dom'
import router from './config/routes'
import './styles/main.css'

import ProdutosProvider from './contexts/ProdutosProvider'
import { AuthProvider } from './contexts/AuthProvider'

function App() {
  return <AuthProvider>
    <ProdutosProvider  >
      <RouterProvider router={router} />
    </ProdutosProvider>
  </AuthProvider>
}

export default App
