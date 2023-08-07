import React, {useState} from "react"
import {Routes, Route} from "react-router"
import {LoadingSpinner} from "./components/loading/loading"

import './assets/styles/style.scss'

const LazyHome = React.lazy(() => import("./pages/home"))
const LazyMoreInfo = React.lazy(() => import("./pages/moreInfo"))
const LazyLogin = React.lazy(() => import("./pages/login"))


function App() {
    const [userList, setUserList] = useState([])

    return (
        <>
            <Routes>
                <Route path={'/'} element={
                    <React.Suspense fallback={<LoadingSpinner/>}>
                        <LazyLogin/>
                    </React.Suspense>
                }/>
                <Route path={'/home'} element={
                    <React.Suspense fallback={<LoadingSpinner/>}>
                        <LazyHome userList={userList} setUserList={setUserList}/>
                    </React.Suspense>
                }/>
                <Route path={'/moreinfo'} element={
                    <React.Suspense fallback={<LoadingSpinner/>}>
                        <LazyMoreInfo userList={userList}/>
                    </React.Suspense>
                }/>
                <Route path={'/moreinfo/:id'} element={
                    <React.Suspense fallback={<LoadingSpinner/>}>
                        <LazyMoreInfo userList={userList}/>
                    </React.Suspense>
                }/>
                <Route path={'*'} element={<div className={'noPage'}><h1>404</h1></div>}/>
            </Routes>
        </>
    )
}

export default App;
