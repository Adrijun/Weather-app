import './App.css';
import { Button, ListGroup } from 'react-bootstrap';
import SearchCity from './components/SearchCity';
import useForecast from './hooks/useForecasts';

function App() {
  const { term, options, forecast, onInputChange, onOptionSelect, onSubmit } =
    useForecast();

  return (
    <main className="bg-light p-4">
      {forecast ? (
        'we have a forecast'
      ) : (
        <SearchCity
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        />
      )}
    </main>
  );
}

export default App;
