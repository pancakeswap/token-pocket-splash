import React from 'react'
import { ThemeProvider } from 'styled-components'
import { light, ResetCSS } from '@pancakeswap/uikit'
import Home from './pages/Home'
import { LanguageProvider } from './context/Localization'
import GlobalStyle from './components/GlobalStyle'

const App = () => {
  return (
    <LanguageProvider>
      <ThemeProvider theme={light}>
        <ResetCSS />
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
