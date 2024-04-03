
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, Image}  from 'react-native';
import { KeyListItem } from '../Components/KeyListItem';
import { useRoute } from '@react-navigation/native';
import { Country } from '../Services/CountriesService';
import { formatSelectedCountryData } from '../Utilities/DataFormat';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';

export const SelectedCountryPage = () => {

    const route = useRoute();
    const navigation = useNavigation();
    const selectedCountry  = route.params;
    
    return (
        <SafeAreaView>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Country Info" />
            </Appbar.Header>
            <View style = {styles.container}>
                <View style = {styles.countryTitleText}>
                   <Image
                    source={{uri: selectedCountry?.flag}}
                    style={styles.image}
                    />
                    <Text style = {styles.titleTextStyle}>{selectedCountry?.name}</Text>
                </View>
                <DataTable>
                {formatSelectedCountryData(selectedCountry as Country).map((item) => (
                    <DataTable.Row key={item.title}>
                        <DataTable.Cell style={{ flex: 1 }}><Text style = {styles.keyTextStyle}>{item.title}</Text></DataTable.Cell>
                        <DataTable.Cell style={{ flex: 1 }}><Text style = {styles.valueTextStyle} numberOfLines={4}>{item.value}</Text></DataTable.Cell>
                    </DataTable.Row>
                ))}
            </DataTable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
    },
    countryTitleText: {
        flexDirection: "row",
        marginTop: 20,
        marginBottom: 20,
        justifyContent: "flex-start",
        borderBottomColor: "#BE8025",
        borderBottomWidth: 5,
        paddingBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        alignItems: "center"
        
    },
    titleTextStyle: {
        fontWeight: "bold",
        fontSize: 30,
        color: "#000",
        flexDirection: "row",
        //justifyContent: "center",
        alignItems: "center",
        marginRight: 20
    },
    image: {
        width: 80,
        height: 50,
        resizeMode: 'stretch',
     },
     keyTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#000"
     },
     valueTextStyle: {
        color: "#000",
        fontWeight: "400",
        fontSize: 15,
        
     }
});