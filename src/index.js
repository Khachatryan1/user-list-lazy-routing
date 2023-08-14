import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom"
import {CustomContextWrapper} from "./util"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <CustomContextWrapper>
                <App />
            </CustomContextWrapper>
        </BrowserRouter>
    </React.StrictMode>
)

