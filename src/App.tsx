import './App.css'
import Footer from './common/components/Footer/Footer'
import Header from './common/components/Header/Header'
import Main from './common/components/Main/Main'
import mock from './mock'

function App() {
  return (
    <>
      <Header />
      <Main api_response_by_city_name={mock} />
      <Footer />
    </>
  )
}

export default App
