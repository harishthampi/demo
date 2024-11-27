
import { Link } from "react-router-dom"
import CitySearch from "./citySearch"
import ThemeToggle from "./themeToggle"

const header = () => {
  return (
    <header className="w-full sticky top-0 z-50 border-b backdrop-blur  bg-background/95">
        <div className="container h-18 mx-auto flex items-center justify-between px-4 py-2">
            <Link to='/'>
                <img src="/logo2.png" alt="logo" className="h-14" />
            </Link>
            <div className="flex items-center gap-4">
                <CitySearch />
                <ThemeToggle />
            </div>

        </div>
    </header>
  )
}

export default header
