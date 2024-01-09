import './App.css';
import SearchCity from './components/SearchCity';
import useForecast from './hooks/useForecasts';
import Forecast from './components/Forecast';

function App() {
  const { term, options, forecast, onInputChange, onOptionSelect, onSubmit } =
    useForecast();

  return (
    <>
      <SearchCity
        term={term}
        options={options}
        onInputChange={onInputChange}
        onOptionSelect={onOptionSelect}
        onSubmit={onSubmit}
      />

      {forecast && <Forecast data={forecast} />}
    </>
  );
}

export default App;
