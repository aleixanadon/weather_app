import { useEffect, useState } from 'react'
import './App.css'
import Footer from './common/components/Footer/Footer'
import Header from './common/components/Header/Header'
import Main from './common/components/Main/Main'
import mock from './mock'
import axios from 'axios'

function App() {

  const cityName = "Madrid";;
  const API_KEY = "97d78d5eab31187d5ef319f90905c4ab";

  const [loading, setLoading] = useState(false);

  const getWeatherByCityName = async () => {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`);
    console.log(data)
    return data
  };

  useEffect(() => {
    getWeatherByCityName();
  });

  return (
    <>
      <Header />
      <Main api_response_by_city_name={mock} loading={loading} magnitude='F'/>
      <Footer />
    </>
  )
}

export default App
