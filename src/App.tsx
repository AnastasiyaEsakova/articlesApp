import { Suspense, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { HomePageAsync } from './pages/HomePage/HomePage.async'
import { useTheme } from './theme/useTheme'
import './styles/index.scss'



export const App = () => {
    const {theme, switchTheme} = useTheme()

    return(     
        <div className={`app ${theme}`}>
            <button onClick={switchTheme}></button>
            Hello
            <Link to={'/'}>Home</Link> 
            <Suspense fallback={<div>LOADING...</div>}>
                <Routes>
                    <Route path="/about" element={HomePageAsync}/>
                    <Route path="/"/>
                </Routes>  
            </Suspense>
        </div>
    )

   
}