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
    <main className="bg-light p-4">
      <section className="container">
        <article className="row">
          <div className="col-md-6 mx-auto w-50">
            <h2 className="text-center">Weather Forecast</h2>
            <p className="text-center">
              Enter the city you want to know the weather for
            </p>
            <input type="text" value={term} onChange={onInputChange} />
            <Button onClick={onSubmit}> Search</Button>

            <ListGroup>
              <ListGroup.Item>
                {options.map((option: optionType, index: number) => (
                  <ListGroup.Item key={option.name + '-' + index}>
                    <Button onClick={() => onOptionSelect(option)}>
                      {option.name}, {option.country}
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup.Item>
            </ListGroup>
          </div>
        </article>
      </section>
    </main>
  );
};

export default SearchCity;
