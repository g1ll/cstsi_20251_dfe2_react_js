import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const promessa = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('Promessa cumprida!!!')
    },2000)
  
    setTimeout(() => {
      reject('Promessa rejeitada!!!')
    },1500);
  })

  useEffect(() => {
    const myPromise = promessa
      .then(data=>console.log(data)) //2 -> executa quando resolvida a promessa
      .catch(msg_error=>console.error(msg_error)) //3 -> capturando o erro
      .finally(()=>console.warn('Finalizado!!!'))//4 -> settled (fulfilled or rejected)

    console.info("Minha promessa:",myPromise)//1. Promise {<pending>}

  },[])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
