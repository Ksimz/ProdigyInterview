import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';

interface CountryListItemProps{
    country: string;
    alpha2code: string;
    flag: string;
    onItemSelected: () => void
}

export const CountryListItem = ({country, alpha2code, flag, onItemSelected}: CountryListItemProps) => {

    return (
        <TouchableOpacity style = {styles.container}
          onPress={onItemSelected}
        >  
            <View>
              <Image
               source={{uri: flag}}
               style={styles.image}
              />
            </View>
            <View style = {styles.titleCodeContainer}>
                <View style = {styles.countryContainer}>
                    <Text style = {styles.countryTextStyle} numberOfLines={2} ellipsizeMode="tail">{country}</Text>
                </View>
                <View style = {styles.alphaCodeContainer}>
                    <Text style = {styles.alphaCodeTextStyle}>{alpha2code}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
     container: {
        flexDirection: "row",
        padding: 5,
        marginLeft: 10,
        marginBottom: 10,
        marginRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        alignItems: "center"
     },
     titleCodeContainer: {
        flexDirection: "column",
        marginLeft: 10,
     }
     ,
     countryContainer: {
        flexDirection: "row",
        marginRight: 10
     },
     alphaCodeContainer:{
         flexDirection: "row",
         paddingTop: 2,
         paddingBottom: 2,
         paddingRight: 5,
         paddingLeft: 5,
         borderRadius: 5,
         backgroundColor: "#2A1F2D",
         width: 30,
         justifyContent: "center"
     },
     countryTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#000"
     },
     alphaCodeTextStyle: {
        color: "#fff",
        fontWeight: "400",
        fontSize: 10,
     },
     image: {
        width: 80,
        height: 50,
        resizeMode: 'stretch'
     }
});