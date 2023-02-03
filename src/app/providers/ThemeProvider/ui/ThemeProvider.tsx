import {useState, useMemo, FC} from 'react'
import { LS_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext'

const defaultValue = localStorage.getItem(LS_THEME_KEY) as Theme || Theme.LIGHT

const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultValue)


    const defaultProps = useMemo(() => {
        return {
             theme: theme,
            setTheme : setTheme
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;