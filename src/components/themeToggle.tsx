import { useTheme } from "@/context/theme-provider"
import { MoonIcon, SunIcon } from "lucide-react"


const ThemeToggle = () => {
  const { theme,setTheme } = useTheme()
  const isDark =  theme === 'dark' //
  const toggleTheme = () => {
    isDark ? setTheme('light') : setTheme('dark')
  }
  return (
    <div onClick={toggleTheme} className={`flex items-center cursor-pointer transition-transform duration-500 ${isDark ? "rotate-180" : "rotate-0"}`}>
      {isDark ? <SunIcon className="h-6 w-6 text-yellow-500 rotate-0 transition-all"/> : <MoonIcon className="h-6 w-6 text-blue-500 rotate-0 transition-all"/>}
    </div>
  )
}

export default ThemeToggle
