const API_KEY = process.env.REACT_APP_API_KEY;
const CURRENT_WEATHER_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather?';
const UNITS = 'metric';

export const fetchCurrentWeather = async(city) => {
  const currentCityUrl = `${CURRENT_WEATHER_ENDPOINT}q=${city}&appid=${API_KEY}&units=${UNITS}`;
  const cityWeather = await fetch(currentCityUrl);
  if (cityWeather.status === 200) {
    const jsonWeather = await cityWeather.json();
    return jsonWeather;
  }
  return undefined;
};