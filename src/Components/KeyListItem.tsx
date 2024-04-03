import React from "react";
import {View, StyleSheet, Text} from "react-native";

interface KeyListItemProps {
    title: string;
    value: string;
}

export const KeyListItem = ({title, value}: KeyListItemProps) => {
    return(
    <View style = {styles.container}>
        <View style = {styles.titleContainer}><Text style = {styles.titleTextStyle}>{title}</Text></View>
        <View style = {styles.valueContainer}><Text style = {styles.valueTextStyle}>{value}</Text></View>
    </View>
    );
}

const styles = StyleSheet.create({
     container: {
        flexDirection: "row",
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: 20
     },
     titleContainer: {
        flexDirection: "row",
        marginLeft: 10
     },
     valueContainer: {
        flexDirection: "row",
        marginLeft: 10
     },
     titleTextStyle: {
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