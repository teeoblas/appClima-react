import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WheatherApp } from './WheatherApp'
import './styles/style.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <WheatherApp></WheatherApp>
    </StrictMode>,
)
