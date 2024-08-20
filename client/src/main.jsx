import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {TestModeContextProvider} from "./Context/TestModeContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TestModeContextProvider>
        <App />
    </TestModeContextProvider>
  </StrictMode>,
)
