import { Country } from "../Services/CountriesService"

export interface CountryDetails {
    title: string;
    value: string;
}

export const formatSelectedCountryData = (unFormattedCountry: Country):  CountryDetails[]=> {
     let countryData: CountryDetails[] = [];
     Object.keys(unFormattedCountry).map((key)=>{
          if(key!=="flag" || typeof unFormattedCountry[key]!=="string")
          {
            countryData.push({
                title: key,
                //@ts-ignore
                value: unFormattedCountry[key]
            });
          }
     });
     return countryData;
}