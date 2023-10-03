import LocationButton from '../LocationButton/LocationButton';
import InputSearch from '../InputSearch/InputSearch';
import SelectTemperatureScale from '../SelectTemperatureScale/SelectTemperatureScale';
import Title from '../Title/Title';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className='top-header'>
        <SelectTemperatureScale />
      </div>
      <div className='bot-header'>
        <Title />
        <div className='bot-sub-header'>
          <LocationButton />
          <InputSearch />
        </div>
      </div>
    </header>
  )
}

export default Header