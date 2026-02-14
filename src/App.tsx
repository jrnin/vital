import * as React from "react"
import { ThemeProvider } from "@/components/theme/ThemeProvider"

export default function App() {
  const LandingPage = React.lazy(() => import("@/pages/LandingPage"))
  return (
    <ThemeProvider defaultTheme="dark">
      <React.Suspense fallback={<div className="p-6 text-sm">Carregando…</div>}>
        <LandingPage />
      </React.Suspense>
    </ThemeProvider>
  )
}

