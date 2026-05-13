import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Global } from '@emotion/react'
import { global } from './styles/global.js'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Global styles={global} />
        <App />
    </BrowserRouter>
)