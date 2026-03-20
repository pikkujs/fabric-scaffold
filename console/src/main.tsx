import '@pikku/console/styles'

// Set favicon dynamically to handle non-root base paths
const favicon = import.meta.env.VITE_CONSOLE_FAVICON || 'pikku-console-logo.png'
const link = document.createElement('link')
link.rel = 'icon'
link.href = import.meta.env.BASE_URL + favicon.replace(/^\//, '')
document.head.appendChild(link)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {
  ConsoleRouterProvider,
  QueryClientProvider,
  ThemeProvider,
  PikkuHTTPProvider,
  PikkuRPCProvider,
} from '@pikku/console'
import { reactRouterAdapter } from '@pikku/console/adapters/react-router'
import { App } from '@pikku/console/app'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || undefined}>
      <ConsoleRouterProvider value={reactRouterAdapter}>
        <QueryClientProvider>
          <ThemeProvider locale="en">
            <PikkuHTTPProvider serverUrl={window.location.origin}>
              <PikkuRPCProvider>
                <App />
              </PikkuRPCProvider>
            </PikkuHTTPProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </ConsoleRouterProvider>
    </BrowserRouter>
  </StrictMode>
)
