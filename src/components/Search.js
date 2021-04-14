import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

import { Feather } from "@expo/vector-icons";

const Search = ({ value, onValueChange, onFinishEnter }) => {
  return (
    <View style={css.searchPanel}>
      <Feather style={css.searchIcon} name="search" color="white" />
      <TextInput
        onChangeText={onValueChange}
        style={css.searchText}
        placeholder="Ном Хайх"
        placeholderTextColor="white"
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onFinishEnter}
      />
    </View>
  );
};

export default Search;

const css = StyleSheet.create({
  searchPanel: {
    top: 20,
    height: 45,
    backgroundColor: "#b2bec3",
    marginHorizontal: 15,
    borderRadius: 50,
    flexDirection: "row"
  },
  searchText: {
    color: "#ffeaa7",
    fontSize: 18,
    flex: 1
  },
  searchIcon: {
    fontSize: 34,
    alignSelf: "center",
    marginHorizontal: 20
  }
});
