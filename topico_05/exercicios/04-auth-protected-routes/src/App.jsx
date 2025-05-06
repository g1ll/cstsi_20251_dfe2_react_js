
import { RouterProvider } from 'react-router-dom'
import router from './config/routes'
import './styles/main.css'

import ProdutosProvider from './contexts/ProdutosProvider'
import { AuthProvider } from './contexts/AuthProvider'
import ThemeProvider from './contexts/ThemeProvider'

function App() {
  return <AuthProvider>
    <ProdutosProvider  >
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ProdutosProvider>
  </AuthProvider>
}

export default App
