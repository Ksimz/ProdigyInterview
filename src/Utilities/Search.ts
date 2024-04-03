import { Country } from "../Services/CountriesService";

export const Search = ({name, cca2}: Country, query: string) => {
    if (name.toLowerCase().includes(query) || cca2.toLowerCase().includes(query))
    {
        return true;
    }
    return false;
}