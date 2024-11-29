import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import { BrowserRouter } from 'react-router-dom'
import WeatherDashboard from './pages/weatherdashboard'
import CityPage from './pages/cityPage'
import { ThemeProvider } from './context/theme-provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  )
}

export default App
