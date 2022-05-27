import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from "./Components/NavBar";
import FirstPage from './Pages/FirstPage'
import SecondPage from './Pages/SecondPage'
import ThirdPage from './Pages/ThirdPage'

const App = () => {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path={'/first'} element={<FirstPage/>}></Route>
                <Route path={'/second'} element={<SecondPage/>}></Route>
                <Route path={'/third'} element={<ThirdPage/>}></Route>
            </Routes>
        </div>
    )
}

export default App
