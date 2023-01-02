import type { AppProps } from 'next/app'

import '../styles/globals.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { UIProvider } from '../context/ui'
import { EntriesProvider } from '../context/entries';

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { lightTheme, darkTheme } from '../themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <UIProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />

        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
  )
}
