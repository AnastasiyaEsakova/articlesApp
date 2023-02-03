import { Suspense, useState, useContext } from 'react'
import { Link,  Route, Routes } from 'react-router-dom'
import { useTheme } from 'app/providers/ThemeProvider'
import { HomePage } from 'pages/HomePage'
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
                    <Route path="/about" element={HomePage}/>
                    <Route path="/"/>
                </Routes>  
            </Suspense>
        </div>
    )

   
}