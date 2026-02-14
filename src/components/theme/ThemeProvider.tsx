import * as React from "react"

export type ThemeMode = "light" | "dark"

type ThemeContextValue = {
  theme: ThemeMode
  setTheme: (theme: ThemeMode) => void
  toggleTheme: () => void
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null)

const STORAGE_KEY = "vital-norte-theme"

function readStoredTheme(): ThemeMode | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === "light" || v === "dark") return v
    return null
  } catch {
    return null
  }
}

function applyThemeToDom(theme: ThemeMode) {
  document.documentElement.classList.toggle("dark", theme === "dark")
  // Helps native controls match the theme
  document.documentElement.style.colorScheme = theme
}

export function ThemeProvider({
  children,
  defaultTheme = "dark",
}: {
  children: React.ReactNode
  defaultTheme?: ThemeMode
}) {
  const [theme, setThemeState] = React.useState<ThemeMode>(() => {
    if (typeof window === "undefined") return defaultTheme
    return readStoredTheme() ?? defaultTheme
  })

  React.useEffect(() => {
    applyThemeToDom(theme)
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // ignore
    }
  }, [theme])

  const setTheme = React.useCallback((t: ThemeMode) => setThemeState(t), [])
  const toggleTheme = React.useCallback(
    () => setThemeState((t) => (t === "dark" ? "light" : "dark")),
    []
  )

  const value = React.useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider")
  return ctx
}

