import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { IconButton } from 'react-native-paper';

interface SearchBarProps{
    query: string;
    onHandleQuery: (searchQuery: string)=>void;
    onClearQuery: () => void
}

export const SearchBar = ({query, onHandleQuery, onClearQuery}: SearchBarProps) => {

    return(
       <View style = {styles.searchBox}>
          <TextInput 
             placeholder="Filter by country or alpha 2 code"
             clearButtonMode="always"
             autoCapitalize="none"
             autoCorrect = {false}
             value = {query}
             onChangeText={(value) => onHandleQuery(value)}
        
          />
            {query.length > 0 && (
                <IconButton
                    icon="close-circle"
                    size={24}
                    onPress={onClearQuery}
                    style={styles.closeButtonStyle}
                />
            )}
       </View>
    );
}

const styles = StyleSheet.create({
      searchBox: {
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 20,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 20,
        justifyContent: "space-between"
      },
      closeButtonStyle: {
        marginRight: "-5%"
      }
  });