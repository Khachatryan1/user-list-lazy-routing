import React from "react"
import {Routes, Route} from "react-router"

import {LoadingSpinner} from "./components/loading/loading"
import {Home} from "./pages/home"
import {MoreInfo} from "./pages/moreInfo"

import './assets/styles/style.scss'

const LazyLogin = React.lazy(() => import("./pages/login"))


function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={
                    <React.Suspense fallback={<LoadingSpinner/>}>
                        <LazyLogin/>
                    </React.Suspense>
                }/>
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/moreinfo'} element={<MoreInfo/>}/>
                <Route path={'/moreinfo/:id'} element={<MoreInfo/>}/>
                <Route path={'*'} element={<div className={'noPage'}><h1>404</h1></div>}/>
            </Routes>
        </>
    )
}

export default App;
