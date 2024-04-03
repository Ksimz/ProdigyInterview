import axios from 'axios';

export interface Country{
    name: string,
    population?: string,
    flag: string,
    region: string,
    cca2: string,
    cca3: string,
    capital?: string,
    languages?: string | null,
    timezones?: string,
    currencies?: string | null
}

export const getCountries = async () => {
    try {

        const response = await axios.get('https://restcountries.com/v3.1/all');
        return dataPrep(response.data);
    } catch (error) {
        console.error('Error fetching countries:', error);

        throw error;
    }
}

const dataPrep = (data: any []): Country[] => {
    let cleanedData: Country[]= [];
    if(data.length > 0)
    {
        cleanedData =data.map((dataPoint)=>{
           return({
              name: dataPoint.name.common,
              population: dataPoint.population,
              flag: dataPoint.flags.png,
              region: dataPoint.region,
              cca2: dataPoint.cca2,
              cca3: dataPoint.cca3,
              capital: dataPoint.capital?.join(","),
              languages: dataPoint.languages ? Object.values(dataPoint.languages)?.join(",") : null,
              timezones: dataPoint.timezones?.join(","),
              currencies: dataPoint.currencies? Object.keys(dataPoint.currencies)?.join(",") : null,
           })
        });
    }
    return cleanedData;
}