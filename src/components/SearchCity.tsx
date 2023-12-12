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
    <main className=" p-4 d-flex align-items-center justify-content-center">
      <section className="">
        <h2 className="text-center">Weather Forecast</h2>
        {/* <p className="text-center">
              Enter the city you want to know the weather for
            </p> */}
        <div className=" d-flex flex-row-reverse justify-content-center">
          <Button onClick={onSubmit} className="me-2">
            Search
          </Button>
          <input type="text" value={term} onChange={onInputChange} />
        </div>

        <ListGroup.Item className=" d-flex  justify-content-center  flex-column position-absolute  z-index-2">
          {options.map((option: optionType, index: number) => (
            <ListGroup.Item key={option.name + '-' + index}>
              <Button onClick={() => onOptionSelect(option)}>
                {option.name}, {option.country}
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup.Item>
      </section>
    </main>
  );
};

export default SearchCity;
