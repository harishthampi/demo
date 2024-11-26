import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import { BrowserRouter } from 'react-router-dom'
import WeatherDashboard from './pages/weatherdashboard'
import CityPage from './pages/cityPage'
import { ThemeProvider } from './context/theme-provider'


function App() {
  return (
    <>
    <ThemeProvider defaultTheme='dark'>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element = {<WeatherDashboard />} />
          <Route path='/city/:cityName' element = {<CityPage />} />
        </Routes>
      </Layout>
      </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

export default App
