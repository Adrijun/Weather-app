import { ChangeEvent } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { optionType } from '../types/types';

type Props = {
  term: string;
  options: [];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (option: optionType) => void;
  onSubmit: () => void;
};

const SearchCity = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props) => {
  return (
    <section className="p-4 d-flex align-items-center justify-content-center">
      <article>
        <h2 className="text-center">Weather Forecast</h2>

        <div className="d-flex flex-row-reverse justify-content-center">
          <Button onClick={onSubmit} className="me-2 " variant="secondary">
            Search
          </Button>
          <input
            type="text"
            value={term}
            onChange={onInputChange}
            className="rounded"
            placeholder="Enter city name"
          />
        </div>

        <ListGroup.Item className="d-flex justify-content-center flex-column position-absolute z-index-2">
          {options.map((option: optionType, index: number) => (
            <ListGroup.Item key={option.name + '-' + index}>
              <Button onClick={() => onOptionSelect(option)} variant="light">
                {option.name}, {option.country}
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup.Item>
      </article>
    </section>
  );
};

export default SearchCity;
