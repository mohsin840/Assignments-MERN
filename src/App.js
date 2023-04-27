import { useState, useEffect } from 'react';
import "./App.css";

function WeatherDropdown() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (selectedCountry && selectedCity) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity},${selectedCountry}&appid=5edee542e3131c49bc66591cfec5ac01`)
        .then(response => response.json())
        .then(data => setWeatherData(data))
        .catch(error => setError(error));
    } else {
      setWeatherData(null);
      setError(null);
    }
  }, [selectedCountry, selectedCity]);

  function handleCountryChange(event) {
    setSelectedCountry(event.target.value);
  }

  function handleCityChange(event) {
    setSelectedCity(event.target.value);
  }

  return (
    <div className='layout'>
    <div className='border'>
      <h2 className='maind'>Select a country and city to see the current weather:</h2>
      <div className='maind'>
        <label className='maind'>
          Country:
          <select className='pad' value={selectedCountry} onChange={handleCountryChange}>
            <option className='maind' value="">Select a country</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="India">India</option>
          </select>
        </label>
      </div>
      <div className='maind'><br/>
        <label className='maind'>
          City:
          <select className='pad' value={selectedCity} onChange={handleCityChange}>
            <option value="">Select a city</option>
            {selectedCountry === 'Pakistan' && (
              <>
                <option value="Islamabad">Islamabad </option>
                <option value="Lahore">Lahore</option>
                <option value="Peshawar">Peshawar</option>
                <option value="Wah Cantt">Wah Cantt</option>
              </>
            )}
            {selectedCountry === 'Afghanistan' && (
              <>
                <option value="Herat">Herat</option>
                <option value="Jalalabad">Jalalabad</option>
                <option value="Kunduz">Kunduz</option>
                <option value="Zaranj">Zaranj</option>
              </>
            )}
            {selectedCountry === 'India' && (
              <>
                <option value="	Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Visakhapatnam">Visakhapatnam</option>
                <option value="Mumbai">Mumbai</option>
              </>
            )}
          </select>
        </label>
      </div>
      {weatherData && (
        <div className='maind'>
          <h3>Current weather in {selectedCity}, {selectedCountry}:</h3>
          <p>Temperature: {weatherData.main.temp-273}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Wind speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
      {error && (
        <p>Something went wrong while fetching the weather data. Please try again later.</p>
      )}
    </div>
    </div>
  );
}

export default WeatherDropdown;
