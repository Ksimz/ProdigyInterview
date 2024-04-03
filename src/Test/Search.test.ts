import { Country } from '../Services/CountriesService'; 
import { Search } from '../Utilities/Search';


const mockCountry: Country = {
  name: 'United States',
  population: '331,002,651',
  flag: 'https://trial.com',
  region: 'Americas',
  cca2: 'US',
  cca3: 'USA',
  capital: 'Washington, D.C.',
  languages: 'English',
  timezones: 'UTC-12:00 to UTC+12:00',
  currencies: 'United States dollar'
};

describe('Search function', () => {
  test('should return true if query matches name or cca2 code', () => {

    expect(Search(mockCountry, 'united')).toBe(true);
    expect(Search(mockCountry, 'us')).toBe(true);


    expect(Search(mockCountry, 'china')).toBe(false);
  });

});