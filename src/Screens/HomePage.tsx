import React, { useEffect, useState, useCallback } from "react";
import { View, StyleSheet, Text, SafeAreaView , FlatList} from "react-native";
import { SearchBar } from "../Components/SearchBar";
import { CountryListItem } from "../Components/CountryListItem";
import { getCountries,  Country } from "../Services/CountriesService";
import { useNavigation, useFocusEffect} from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
import filter from "lodash.filter";
import { Search } from "../Utilities/Search";
import { storeData, getData } from "../Services/StorageServices";

export const HomePage = () => {
    
    const [ countries, setCountries ] = useState<Country[]>([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ searchQuery, setSearchQuery ] = useState("");

    const navigation = useNavigation();

    const navigateToSelectedCountryPage = (index: number) => {
        //@ts-ignore
        storeData("name", countries[index].name);
        storeData("cca2", countries[index].cca2);
        navigation.navigate('SelectedCountry', countries[index]);
        setIsLoading(true);
    };

    useEffect(() => {
      
      getCountries().then((data: Country[])=>{
        setCountries(data);
        setIsLoading(false)
      }).catch((error)=>{
          //TODO: add error message component
      });
      
      getData("name").then((name)=>{
        if(name!==null)
        {
           
            handleSearch(name);
            setSearchQuery(name);
        }
        
      }).catch((error)=>{
        console.log("Error reading device storage");
      })
    }, []);

    useFocusEffect(
        useCallback(() => {
        getCountries().then((data: Country[])=>{
            setCountries(data);
            setIsLoading(false)
          }).catch((error)=>{
              //TODO: add error message component
          });
        }, [])
      );

    const handleSearch = (query: string) => {
         setSearchQuery(query);
         const resizedQuery = query.toLowerCase();
         const filterData = filter(countries, (country)=>{
            return Search(country, resizedQuery)
         });
         setCountries(filterData);
    }

    const handleClearQuery = () => {
        setSearchQuery("");
        getCountries().then((data: Country[])=>{
            setCountries(data);
            setIsLoading(false)
          }).catch((error)=>{
              //TODO: add error message component
          });

    }

    return(
        <SafeAreaView>
            <Appbar.Header>
                <Appbar.Content title="Countries" />
            </Appbar.Header>
            <SearchBar query={searchQuery} onHandleQuery={handleSearch} onClearQuery={handleClearQuery}/>
        
        <FlatList
            data = {countries}
            keyExtractor = {(item) => item.cca3} 
            renderItem = {({item, index})=>(<CountryListItem country={item.name} alpha2code={item.cca2} flag={item.flag}
                 onItemSelected={()=> navigateToSelectedCountryPage(index)}/>)}
        />
        </SafeAreaView>

    );
}